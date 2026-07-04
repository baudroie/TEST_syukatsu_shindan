import { MessagesSquare } from "lucide-react";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export default function InterviewPage() {
  return (
    <PlaceholderPage
      eyebrow="INTERVIEW"
      title="面接対策"
      description="タイプに合った伝え方をもとに、想定質問への回答を練習できる機能を準備しています。"
      icon={MessagesSquare}
    />
  );
}
