const SHEET_ID = "1hO866bqccDvM6RsMwFnvE_WOvAalyqx-3CW3OJBMkaw";
const SHEET_NAME = "回答";

const HEADERS = [
  "受信日時",
  "送信日時",
  "氏名",
  "電話番号",
  "メールアドレス",
  "性別",
  "利用規約同意",
  "同意日時",
  "メインタイプ",
  "メインタイプ名",
  "サブタイプ",
  "サブタイプ名",
  "スコアJSON",
  "回答JSON",
  "送信元URL",
  "User Agent",
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const payloadText =
      e && e.parameter && e.parameter.payload
        ? e.parameter.payload
        : e && e.postData && e.postData.contents
          ? e.postData.contents
          : "";

    if (!payloadText) {
      throw new Error("payload is empty");
    }

    const payload = JSON.parse(payloadText);
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const sheet = getOrCreateSheet_(spreadsheet, SHEET_NAME);
    ensureHeaders_(sheet);

    const lead = payload.lead || {};
    const result = payload.result || {};

    sheet.appendRow([
      new Date(),
      payload.submittedAt || "",
      lead.fullName || "",
      lead.phone || "",
      lead.email || "",
      lead.gender || "",
      lead.termsAccepted ? "TRUE" : "FALSE",
      lead.agreedAt || "",
      result.mainType || "",
      result.mainTypeName || "",
      result.subType || "",
      result.subTypeName || "",
      JSON.stringify(result.scores || {}),
      JSON.stringify(payload.answers || []),
      payload.sourceUrl || "",
      payload.userAgent || "",
    ]);

    return json_({ ok: true });
  } catch (error) {
    return json_({
      ok: false,
      error: error && error.message ? error.message : String(error),
    });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return json_({ ok: true, message: "career type webhook is running" });
}

function getOrCreateSheet_(spreadsheet, name) {
  return spreadsheet.getSheetByName(name) || spreadsheet.insertSheet(name);
}

function ensureHeaders_(sheet) {
  const firstRow = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  const hasHeaders = firstRow.some(function (value) {
    return value;
  });

  if (!hasHeaders) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
  }
}

function json_(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
