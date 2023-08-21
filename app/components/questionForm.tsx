import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from "react";
import { useFormContext } from "react-hook-form"
import QuestionItem from "./questionItem";

export default function QuestionForm() {
  const { handleSubmit, formState: { errors } } = useFormContext();
  const [stateA, setStateA] = useState(0);
  const [stateB, setStateB] = useState(0);

  const router = useRouter();

  const data = [
    {
      "index": 1,
      "type1": {
        "category": "feel",
        "question": "주기적으로 새로운 친구를 만든다.",
        "options": [
          {
            "index": 1,
            "content": "매우 아니다",
            "score": 10
          },
          {
            "index": 2,
            "content": "아니다",
            "score": 20
          },
          {
            "index": 3,
            "content": "그렇다",
            "score": 30
          },
          {
            "index": 4,
            "content": "매우 그렇다",
            "score": 40
          }
        ]
      },
      "type2": {
        "category": "think",
        "question": "친구가 카톡 답장이 없다. 당신이 할 일은?",
        "options": [
          {
            "index": 1,
            "content": "무시한다",
            "score": 10
          },
          {
            "index": 2,
            "content": "차단한다",
            "score": 20
          },
          {
            "index": 3,
            "content": "전화를 해본다",
            "score": 30
          },
          {
            "index": 4,
            "content": "답장이 올때까지 기다린다",
            "score": 40
          }
        ]
      },
    },
    {
      "index": 2,
      "type1": {
        "category": "feel",
        "question": "주기적으로 새로운 친구를 만든다.",
        "options": [
          {
            "index": 1,
            "content": "매우 아니다",
            "score": 10
          },
          {
            "index": 2,
            "content": "아니다",
            "score": 20
          },
          {
            "index": 3,
            "content": "그렇다",
            "score": 30
          },
          {
            "index": 4,
            "content": "매우 그렇다",
            "score": 40
          }
        ]
      },
      "type2": {
        "category": "think",
        "question": "친구가 카톡 답장이 없다. 당신이 할 일은?",
        "options": [
          {
            "index": 1,
            "content": "무시한다",
            "score": 10
          },
          {
            "index": 2,
            "content": "차단한다",
            "score": 20
          },
          {
            "index": 3,
            "content": "전화를 해본다",
            "score": 30
          },
          {
            "index": 4,
            "content": "답장이 올때까지 기다린다",
            "score": 40
          }
        ]
      },
    },
    {
      "index": 3,
      "type1": {
        "category": "feel",
        "question": "주기적으로 새로운 친구를 만든다.",
        "options": [
          {
            "index": 1,
            "content": "매우 아니다",
            "score": 10
          },
          {
            "index": 2,
            "content": "아니다",
            "score": 20
          },
          {
            "index": 3,
            "content": "그렇다",
            "score": 30
          },
          {
            "index": 4,
            "content": "매우 그렇다",
            "score": 40
          }
        ]
      },
      "type2": {
        "category": "think",
        "question": "친구가 카톡 답장이 없다. 당신이 할 일은?",
        "options": [
          {
            "index": 1,
            "content": "무시한다",
            "score": 10
          },
          {
            "index": 2,
            "content": "차단한다",
            "score": 20
          },
          {
            "index": 3,
            "content": "전화를 해본다",
            "score": 30
          },
          {
            "index": 4,
            "content": "답장이 올때까지 기다린다",
            "score": 40
          }
        ]
      },
    },
    {
      "index": 4,
      "type1": {
        "category": "feel",
        "question": "주기적으로 새로운 친구를 만든다.",
        "options": [
          {
            "index": 1,
            "content": "매우 아니다",
            "score": 10
          },
          {
            "index": 2,
            "content": "아니다",
            "score": 20
          },
          {
            "index": 3,
            "content": "그렇다",
            "score": 30
          },
          {
            "index": 4,
            "content": "매우 그렇다",
            "score": 40
          }
        ]
      },
      "type2": {
        "category": "think",
        "question": "친구가 카톡 답장이 없다. 당신이 할 일은?",
        "options": [
          {
            "index": 1,
            "content": "무시한다",
            "score": 10
          },
          {
            "index": 2,
            "content": "차단한다",
            "score": 20
          },
          {
            "index": 3,
            "content": "전화를 해본다",
            "score": 30
          },
          {
            "index": 4,
            "content": "답장이 올때까지 기다린다",
            "score": 40
          }
        ]
      },
    },
    {
      "index": 5,
      "type1": {
        "category": "feel",
        "question": "주기적으로 새로운 친구를 만든다.",
        "options": [
          {
            "index": 1,
            "content": "매우 아니다",
            "score": 10
          },
          {
            "index": 2,
            "content": "아니다",
            "score": 20
          },
          {
            "index": 3,
            "content": "그렇다",
            "score": 30
          },
          {
            "index": 4,
            "content": "매우 그렇다",
            "score": 40
          }
        ]
      },
      "type2": {
        "category": "think",
        "question": "친구가 카톡 답장이 없다. 당신이 할 일은?",
        "options": [
          {
            "index": 1,
            "content": "무시한다",
            "score": 10
          },
          {
            "index": 2,
            "content": "차단한다",
            "score": 20
          },
          {
            "index": 3,
            "content": "전화를 해본다",
            "score": 30
          },
          {
            "index": 4,
            "content": "답장이 올때까지 기다린다",
            "score": 40
          }
        ]
      },
    },
    {
      "index": 6,
      "type1": {
        "category": "feel",
        "question": "주기적으로 새로운 친구를 만든다.",
        "options": [
          {
            "index": 1,
            "content": "매우 아니다",
            "score": 10
          },
          {
            "index": 2,
            "content": "아니다",
            "score": 20
          },
          {
            "index": 3,
            "content": "그렇다",
            "score": 30
          },
          {
            "index": 4,
            "content": "매우 그렇다",
            "score": 40
          }
        ]
      },
      "type2": {
        "category": "think",
        "question": "친구가 카톡 답장이 없다. 당신이 할 일은?",
        "options": [
          {
            "index": 1,
            "content": "무시한다",
            "score": 10
          },
          {
            "index": 2,
            "content": "차단한다",
            "score": 20
          },
          {
            "index": 3,
            "content": "전화를 해본다",
            "score": 30
          },
          {
            "index": 4,
            "content": "답장이 올때까지 기다린다",
            "score": 40
          }
        ]
      },
    },
    {
      "index": 7,
      "type1": {
        "category": "feel",
        "question": "주기적으로 새로운 친구를 만든다.",
        "options": [
          {
            "index": 1,
            "content": "매우 아니다",
            "score": 10
          },
          {
            "index": 2,
            "content": "아니다",
            "score": 20
          },
          {
            "index": 3,
            "content": "그렇다",
            "score": 30
          },
          {
            "index": 4,
            "content": "매우 그렇다",
            "score": 40
          }
        ]
      },
      "type2": {
        "category": "think",
        "question": "친구가 카톡 답장이 없다. 당신이 할 일은?",
        "options": [
          {
            "index": 1,
            "content": "무시한다",
            "score": 10
          },
          {
            "index": 2,
            "content": "차단한다",
            "score": 20
          },
          {
            "index": 3,
            "content": "전화를 해본다",
            "score": 30
          },
          {
            "index": 4,
            "content": "답장이 올때까지 기다린다",
            "score": 40
          }
        ]
      },
    },
    {
      "index": 8,
      "type1": {
        "category": "feel",
        "question": "주기적으로 새로운 친구를 만든다.",
        "options": [
          {
            "index": 1,
            "content": "매우 아니다",
            "score": 10
          },
          {
            "index": 2,
            "content": "아니다",
            "score": 20
          },
          {
            "index": 3,
            "content": "그렇다",
            "score": 30
          },
          {
            "index": 4,
            "content": "매우 그렇다",
            "score": 40
          }
        ]
      },
      "type2": {
        "category": "think",
        "question": "친구가 카톡 답장이 없다. 당신이 할 일은?",
        "options": [
          {
            "index": 1,
            "content": "무시한다",
            "score": 10
          },
          {
            "index": 2,
            "content": "차단한다",
            "score": 20
          },
          {
            "index": 3,
            "content": "전화를 해본다",
            "score": 30
          },
          {
            "index": 4,
            "content": "답장이 올때까지 기다린다",
            "score": 40
          }
        ]
      },
    },
  ];

  const onSubmit = (data: any) => {

    let type1_sum = 0;
    let type2_sum = 0;

    for (let prop in data) {

      if (String(prop).startsWith('feel')) {
        let score = parseInt(data[prop]);
        type1_sum += score;

        setStateA(type1_sum);
      }

      if (String(prop).startsWith('think')) {
        let score = parseInt(data[prop]);
        type2_sum += score;

        setStateB(type2_sum);
      }

      //이동
      router.push(`/result/final_score?type1_sum=${type1_sum}&type2_sum=${type2_sum}`);

    }
  }

  const onError = (error: any) => {
    const errorState = Object.values(errors);
    console.log(errorState)

    //alert
    alert("빠진 문항이 있습니다. 모든 문항을 체크해주세요.");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>

      {data.map((item, idx) => (
        <QuestionItem
          key={idx}
          type1={item.type1}
          type2={item.type2}
          index={item.index}
        />
      ))}

      {/* Submit */}
      <button type="submit">제출하기</button>

      <h1>{`Feel : ${stateA}점 / Think :  ${stateB}점`}</h1>
    </form>
  )
}