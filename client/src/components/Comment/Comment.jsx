import { Flex, Rate } from "antd";
import { comments } from "../../data/data";
import { useSelector } from "react-redux";
import styled from "styled-components";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

// Style Component
const RateWrapper = styled(Rate)`
  .ant-rate-star.ant-rate-star-zero .ant-rate-star-second span {
    color: ${({ $darkModeEnabled }) =>
      $darkModeEnabled ? "rgb(156 163 175)" : "rgba(0, 0, 0, 0.06)"};
  }
`;

const Comment = () => {
  const darkModeEnabled = useSelector((state) => state.darkMode.enabled);
  return (
    <div className="dark:text-white">
      <h3 className="text-lg font-bold mb-5">What our customers are saying</h3>
      <div className="flex md:flex-row flex-col items-center gap-6 md:snap-x snap-y md:overflow-x-auto overflow-y-auto snap-proximity w-full custom-scrollbar">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="flex flex-col gap-4 bg-[#FAFAFD] p-4 px-6 md:my-4 mt-2 rounded-lg w-full md:w-[400px] snap-center flex-shrink-0 dark:bg-dark-1 shadow-custom"
          >
            <div className="flex items-center justify-between">
              <div className="w-[25%]">
                <img
                  src={comment.avatar}
                  alt=""
                  className="w-14 h-14 rounded-full"
                />
              </div>
              <div className="w-[75%]">
                <h4 className="text-lg">{comment.username}</h4>
                <p className="text-md font-normal mt-1">
                  {comment.comment.length > 35
                    ? comment.comment.substring(0, 35) + "..."
                    : comment.comment}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-dark-1 dark:text-white">
              <Flex gap="middle" vertical>
                <RateWrapper
                  className="text-[17px]"
                  tooltips={desc}
                  disabled
                  value={comment.star}
                  $darkModeEnabled={darkModeEnabled}
                />
              </Flex>
              ({comment.star}) stars
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
