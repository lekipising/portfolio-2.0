import React from "react";

export default function ShowRealTimeMessage({ name, email, message }) {
  return (
    <div className="hidden md:block max-w-[30vw] text-gray-100">
      <p className="flex items-center">
        <NumberTxt num={"1"} /> <KeywordText keyword="const" />{" "}
        <VarType vr="button" customStyle="ml-2" />
        <KeywordText keyword="=" customStyle="px-2" />{" "}
        <VarType vr="document.querySelector" />
        {`{`}
        <UserdefinedText text="'#sendBtn'" />
        {`};`}
      </p>
      <p>
        <NumberTxt num={"2"} />
      </p>
      <p>
        <NumberTxt num={"3"} />
        <KeywordText keyword="const" />
        <VarType vr="message" customStyle="ml-2" />
        <KeywordText keyword="=" customStyle="px-2" />
        {`{`}
      </p>
      <p className="">
        <NumberTxt num={"4"} />
        <VarType vr="name" customStyle="ml-4" />
        {`:`}
        <UserdefinedText text={`'${name}'`} customStyle="ml-2" />
        {`,`}
      </p>
      <p className="">
        <NumberTxt num={"5"} />
        <VarType vr="email" customStyle="ml-4" />
        {`:`}
        <UserdefinedText text={`'${email}'`} customStyle="ml-2" />
        {`,`}
      </p>
      <p className="">
        <NumberTxt num={"6"} />
        <VarType vr="message" customStyle="ml-4" />
        {`:`}
        <UserdefinedText
          text={`'${message.substring(0, 40)}'`}
          customStyle="ml-2"
        />
        {message.length > 40 && (
          <>
            <br />
            <UserdefinedText
              text={`'${message.substring(40, 80)}'`}
              customStyle="ml-32"
            />
          </>
        )}
        {message.length > 80 && (
          <>
            <br />
            <UserdefinedText
              text={`'${message.substring(80, message.length)}'`}
              customStyle="ml-32"
            />
          </>
        )}
        {`,`}
      </p>
      <p>
        <NumberTxt num={"7"} />
        {`}`}
      </p>
      <p>
        <NumberTxt num={"8"} />
      </p>
      <p>
        <NumberTxt num={"9"} />
        <VarType vr="button.addEventListener" customStyle="" />
        {`(`}
        <UserdefinedText text={`'click'`} customStyle="" />
        {`, () `}
        <KeywordText keyword="=> " />
        {`{`} <br />
        <VarType vr="form.send" customStyle="ml-8" />
        {`(`}
        <VarType vr="message" customStyle="" />
        {`);`}
      </p>
      <p>
        <NumberTxt num={"10"} />
        {`});`}
      </p>
    </div>
  );
}

function NumberTxt({ num }: { num: string }) {
  return <span className="mr-4 text-gray-100">{num}</span>;
}

function KeywordText({
  keyword,
  customStyle,
}: {
  keyword: string;
  customStyle?: string;
}) {
  return <span className={`${customStyle} text-[#C98BDF]`}>{keyword}</span>;
}

function UserdefinedText({
  text,
  customStyle,
}: {
  text: string;
  customStyle?: string;
}) {
  return <span className={`text-yellow ${customStyle}`}>{text}</span>;
}

function VarType({ vr, customStyle }: { vr: string; customStyle?: string }) {
  return <span className={`${customStyle} text-[#5565E8]`}>{vr}</span>;
}
