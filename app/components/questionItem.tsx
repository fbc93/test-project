import { useRef } from "react";
import { useFormContext } from "react-hook-form";
import { styled } from "styled-components";

const Wrapper = styled.div`
  border:1px solid red;
  margin: 20px;
  padding: 20px;
`;

export default function QuestionItem({
  index,
  type1,
  type2,
}: {
  index: number;
  type1: any;
  type2: any;
}) {
  const { register } = useFormContext();

  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Wrapper ref={ref}>
      <h2>{index}.</h2>

      {/* Think */}
      <fieldset>
        <h3>{type1.question}</h3>
        <legend>{type1.category}</legend>

        {type1.options.map((item: any, idx: number) => (
          <label key={idx} onClick={handleClick}>
            <input
              type="radio"
              value={item.score}
              {...register(`feel-${index}`, { required: "빠진 문항이 있습니다. 모든 문항을 체크해주세요." })}
            />
            {item.content}
          </label>
        ))}

      </fieldset>

      {/* Feel */}
      <fieldset>
        <h3>{type2.question}</h3>
        <legend>{type2.category}</legend>

        {type2.options.map((item: any, idx: number) => (
          <label key={idx}>
            <input
              type="radio"
              value={item.score}
              {...register(`think-${index}`, { required: "빠진 문항이 있습니다. 모든 문항을 체크해주세요." })}
            />
            {item.content}
          </label>
        ))}

      </fieldset>
    </Wrapper>
  )
}