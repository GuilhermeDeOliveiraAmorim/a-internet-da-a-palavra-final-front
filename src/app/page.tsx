import { Question } from "@/internal/domain/question";
import QuestionCard from "@/components/question_card";

export default function Home() {
  const questions: Question[] = [
    {
      id: "01JC3F7A1XHXQC3V3E8YPBXNJJ",
      active: true,
      created_at: new Date("2024-11-07T14:07:31.901942Z"),
      updated_at: new Date("2024-11-07T14:07:31.902013Z"),
      deactivated_at: new Date("2024-11-07T14:07:31.901942Z"),
      text: "How do you pronounce gif?",
      icon: "icon.png",
      options: [
        {
          id: "01JC3F7A1YEQNXR7D4PMKBD2R2",
          active: true,
          created_at: new Date("2024-11-07T14:07:31.902011Z"),
          updated_at: new Date("2024-11-07T14:25:26.708961Z"),
          deactivated_at: new Date("2024-11-07T14:07:31.902011Z"),
          text: "Jif",
          icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1maWxlLWltYWdlIj48cGF0aCBkPSJNMTUgMkg2YTIgMiAwIDAgMC0yIDJ2MTZhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjdaIi8+PHBhdGggZD0iTTE0IDJ2NGEyIDIgMCAwIDAgMiAyaDQiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjEyIiByPSIyIi8+PHBhdGggZD0ibTIwIDE3LTEuMjk2LTEuMjk2YTIuNDEgMi40MSAwIDAgMC0zLjQwOCAwTDkgMjIiLz48L3N2Zz4=",
          description: "It's pronounced jif.",
          question_id: "01JC3F7A1XHXQC3V3E8YPBXNJJ",
          votes: 14,
        },
        {
          id: "01JC3F7A1YEQNXR7D4PGV1HCKJ",
          active: true,
          created_at: new Date("2024-11-07T14:07:31.902008Z"),
          updated_at: new Date("2024-11-07T14:31:31.244931Z"),
          deactivated_at: new Date("2024-11-07T14:07:31.902008Z"),
          text: "Gif",
          icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1pbWFnZS1wbGF5Ij48cGF0aCBkPSJtMTEgMTYtNSA1Ii8+PHBhdGggZD0iTTExIDIxSDVhMiAyIDAgMCAxLTItMlY1YTIgMiAwIDAgMSAyLTJoMTRhMiAyIDAgMCAxIDIgMnY2LjUiLz48cGF0aCBkPSJNMTUuNzY1IDIyYS41LjUgMCAwIDEtLjc2NS0uNDI0VjEzLjM4YS41LjUgMCAwIDEgLjc2NS0uNDI0bDUuODc4IDMuNjc0YTEgMSAwIDAgMSAwIDEuNjk2eiIvPjxjaXJjbGUgY3g9IjkiIGN5PSI5IiByPSIyIi8+PC9zdmc+",
          description: "It's pronounced gif.",
          question_id: "01JC3F7A1XHXQC3V3E8YPBXNJJ",
          votes: 16,
        },
      ],
    },
    {
      id: "01JC3GQ2TNF3XK531FDA6BRWHQ",
      active: true,
      created_at: new Date("2024-11-07T14:33:37.365187Z"),
      updated_at: new Date("2024-11-07T14:33:37.365199Z"),
      deactivated_at: new Date("2024-11-07T14:33:37.365187Z"),
      text: "What's your favorite programming language?",
      icon: "programming_icon.png",
      options: [
        {
          id: "01JC3GQ2TNF3XK531FDAR59ABM",
          active: true,
          created_at: new Date("2024-11-07T14:33:37.365193Z"),
          updated_at: new Date("2024-11-07T14:33:37.365193Z"),
          deactivated_at: new Date("2024-11-07T14:33:37.365193Z"),
          text: "Go",
          icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb2RlLXhtbCI+PHBhdGggZD0ibTE4IDE2IDQtNC00LTQiLz48cGF0aCBkPSJtNiA4LTQgNCA0IDQiLz48cGF0aCBkPSJtMTQuNSA0LTUgMTYiLz48L3N2Zz4=",
          description:
            "Go is a statically typed, compiled programming language designed by Google.",
          question_id: "01JC3F7A1XHXQC3V3E8YPBXNJJ",
          votes: 0,
        },
        {
          id: "01JC3GQ2TNF3XK531FDCE0HQDV",
          active: true,
          created_at: new Date("2024-11-07T14:33:37.365197Z"),
          updated_at: new Date("2024-11-07T14:33:37.365197Z"),
          deactivated_at: new Date("2024-11-07T14:33:37.365197Z"),
          text: "Python",
          icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13b3JtIj48cGF0aCBkPSJtMTkgMTItMS41IDMiLz48cGF0aCBkPSJNMTkuNjMgMTguODEgMjIgMjAiLz48cGF0aCBkPSJNNi40NyA4LjIzYTEuNjggMS42OCAwIDAgMSAyLjQ0IDEuOTNsLS42NCAyLjA4YTYuNzYgNi43NiAwIDAgMCAxMC4xNiA3LjY3bC40Mi0uMjdhMSAxIDAgMSAwLTIuNzMtNC4yMWwtLjQyLjI3YTEuNzYgMS43NiAwIDAgMS0yLjYzLTEuOTlsLjY0LTIuMDhBNi42NiA2LjY2IDAgMCAwIDMuOTQgMy45bC0uNy40YTEgMSAwIDEgMCAyLjU1IDQuMzR6Ii8+PC9zdmc+",
          description:
            "Python is a dynamic, interpreted language known for its readability and ease of use.",
          question_id: "01JC3F7A1XHXQC3V3E8YPBXNJJ",
          votes: 0,
        },
      ],
    },
    {
      id: "01JC3GQ7VVW8S406B6WH451YMT",
      active: true,
      created_at: new Date("2024-11-07T14:33:42.523643Z"),
      updated_at: new Date("2024-11-07T14:33:42.523652Z"),
      deactivated_at: new Date("2024-11-07T14:33:42.523643Z"),
      text: "Which is the best web browser?",
      icon: "browser_icon.png",
      options: [
        {
          id: "01JC3GQ7VVW8S406B6WJ8NS1PB",
          active: true,
          created_at: new Date("2024-11-07T14:33:42.523648Z"),
          updated_at: new Date("2024-11-07T14:33:42.523648Z"),
          deactivated_at: new Date("2024-11-07T14:33:42.523648Z"),
          text: "Chrome",
          icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaHJvbWUiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNCIvPjxsaW5lIHgxPSIyMS4xNyIgeDI9IjEyIiB5MT0iOCIgeTI9IjgiLz48bGluZSB4MT0iMy45NSIgeDI9IjguNTQiIHkxPSI2LjA2IiB5Mj0iMTQiLz48bGluZSB4MT0iMTAuODgiIHgyPSIxNS40NiIgeTE9IjIxLjk0IiB5Mj0iMTQiLz48L3N2Zz4=",
          description: "Google Chrome is a fast and secure web browser.",
          question_id: "01JC3F7A1XHXQC3V3E8YPBXNJJ",
          votes: 0,
        },
        {
          id: "01JC3GQ7VVW8S406B6WM8BRM1W",
          active: true,
          created_at: new Date("2024-11-07T14:33:42.523651Z"),
          updated_at: new Date("2024-11-07T14:33:42.523651Z"),
          deactivated_at: new Date("2024-11-07T14:33:42.523651Z"),
          text: "Firefox",
          icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1lYXJ0aCI+PHBhdGggZD0iTTIxLjU0IDE1SDE3YTIgMiAwIDAgMC0yIDJ2NC41NCIvPjxwYXRoIGQ9Ik03IDMuMzRWNWEzIDMgMCAwIDAgMyAzYTIgMiAwIDAgMSAyIDJjMCAxLjEuOSAyIDIgMmEyIDIgMCAwIDAgMi0yYzAtMS4xLjktMiAyLTJoMy4xNyIvPjxwYXRoIGQ9Ik0xMSAyMS45NVYxOGEyIDIgMCAwIDAtMi0yYTIgMiAwIDAgMS0yLTJ2LTFhMiAyIDAgMCAwLTItMkgyLjA1Ii8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48L3N2Zz4=",
          description:
            "Mozilla Firefox is a free and open-source web browser with a focus on privacy.",
          question_id: "01JC3F7A1XHXQC3V3E8YPBXNJJ",
          votes: 0,
        },
      ],
    },
    {
      id: "01JC3GQBNHVR3HG1DBKP97CK9B",
      active: true,
      created_at: new Date("2024-11-07T14:33:46.417587Z"),
      updated_at: new Date("2024-11-07T14:33:46.417595Z"),
      deactivated_at: new Date("2024-11-07T14:33:46.417587Z"),
      text: "What's your favorite coffee?",
      icon: "coffee_icon.png",
      options: [
        {
          id: "01JC3GQBNHVR3HG1DBKQ1PE9A3",
          active: true,
          created_at: new Date("2024-11-07T14:33:46.417592Z"),
          updated_at: new Date("2024-11-07T14:33:46.417592Z"),
          deactivated_at: new Date("2024-11-07T14:33:46.417592Z"),
          text: "Espresso",
          icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb2ZmZWUiPjxwYXRoIGQ9Ik0xMCAydjIiLz48cGF0aCBkPSJNMTQgMnYyIi8+PHBhdGggZD0iTTE2IDhhMSAxIDAgMCAxIDEgMXY4YTQgNCAwIDAgMS00IDRIN2E0IDQgMCAwIDEtNC00VjlhMSAxIDAgMCAxIDEtMWgxNGE0IDQgMCAxIDEgMCA4aC0xIi8+PHBhdGggZD0iTTYgMnYyIi8+PC9zdmc+",
          description:
            "A concentrated form of coffee served in small, strong shots.",
          question_id: "01JC3F7A1XHXQC3V3E8YPBXNJJ",
          votes: 0,
        },
        {
          id: "01JC3GQBNHVR3HG1DBKRV33Q8E",
          active: true,
          created_at: new Date("2024-11-07T14:33:46.417594Z"),
          updated_at: new Date("2024-11-07T14:33:46.417594Z"),
          deactivated_at: new Date("2024-11-07T14:33:46.417594Z"),
          text: "Latte",
          icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb2ZmZWUiPjxwYXRoIGQ9Ik0xMCAydjIiLz48cGF0aCBkPSJNMTQgMnYyIi8+PHBhdGggZD0iTTE2IDhhMSAxIDAgMCAxIDEgMXY4YTQgNCAwIDAgMS00IDRIN2E0IDQgMCAwIDEtNC00VjlhMSAxIDAgMCAxIDEtMWgxNGE0IDQgMCAxIDEgMCA4aC0xIi8+PHBhdGggZD0iTTYgMnYyIi8+PC9zdmc+",
          description: "A coffee drink made with espresso and steamed milk.",
          question_id: "01JC3F7A1XHXQC3V3E8YPBXNJJ",
          votes: 0,
        },
      ],
    },
    {
      id: "01JC3GQK060ZTPV9C3SP7S9C24",
      active: true,
      created_at: new Date("2024-11-07T14:33:53.926338Z"),
      updated_at: new Date("2024-11-07T14:33:53.926344Z"),
      deactivated_at: new Date("2024-11-07T14:33:53.926338Z"),
      text: "Which type of music do you prefer?",
      icon: "music_icon.png",
      options: [
        {
          id: "01JC3GQK060ZTPV9C3SQYQKD92",
          active: true,
          created_at: new Date("2024-11-07T14:33:53.926341Z"),
          updated_at: new Date("2024-11-07T14:33:53.926341Z"),
          deactivated_at: new Date("2024-11-07T14:33:53.926341Z"),
          text: "Rock",
          icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1hdWRpby1saW5lcyI+PHBhdGggZD0iTTIgMTB2MyIvPjxwYXRoIGQ9Ik02IDZ2MTEiLz48cGF0aCBkPSJNMTAgM3YxOCIvPjxwYXRoIGQ9Ik0xNCA4djciLz48cGF0aCBkPSJNMTggNXYxMyIvPjxwYXRoIGQ9Ik0yMiAxMHYzIi8+PC9zdmc+",
          description:
            "Rock music is a genre characterized by a strong beat and simple melodies.",
          question_id: "01JC3F7A1XHXQC3V3E8YPBXNJJ",
          votes: 0,
        },
        {
          id: "01JC3GQK060ZTPV9C3ST2VN4WA",
          active: true,
          created_at: new Date("2024-11-07T14:33:53.926343Z"),
          updated_at: new Date("2024-11-07T14:33:53.926343Z"),
          deactivated_at: new Date("2024-11-07T14:33:53.926343Z"),
          text: "Jazz",
          icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1hdWRpby13YXZlZm9ybSI+PHBhdGggZD0iTTIgMTNhMiAyIDAgMCAwIDItMlY3YTIgMiAwIDAgMSA0IDB2MTNhMiAyIDAgMCAwIDQgMFY0YTIgMiAwIDAgMSA0IDB2MTNhMiAyIDAgMCAwIDQgMHYtNGEyIDIgMCAwIDEgMi0yIi8+PC9zdmc+",
          description:
            "Jazz is a genre of music that originated in African-American communities.",
          question_id: "01JC3F7A1XHXQC3V3E8YPBXNJJ",
          votes: 0,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold text-teal-600 mb-4">
        Let´s Settle This.
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Internet debates have raged for too long.
        <br />
        It´s time to settle the big questions so we can move on.
      </p>

      <div className="flex flex-col items-center justify-center w-full max-w-md gap-4">
        {questions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
}
