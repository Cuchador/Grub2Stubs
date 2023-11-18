import React from "react";

const GPTResponse = ({ gptmessage }) => {
  return (
    <div className="answerDiv">
      <div className="answerSubDiv">
        <hr className="hrLine" />
        <div className="answerContainer">
            {gptmessage?.map((value, index) => {
                return (
                <div className="answerSection" key={index}>
                    {console.log(value.answer.content)}
                    <p className="answer">{value.answer.content}</p>
                </div>
                )
            })}
        </div>
        </div>
      </div>
  );
};

export default GPTResponse;