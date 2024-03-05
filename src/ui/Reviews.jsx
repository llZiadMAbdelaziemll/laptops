import React from "react";
import styled from "styled-components";
const StyledReviews = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-top: 2rem;
`;

const ReviewsImgs = styled.div`
  display: flex;
`;

const Img = styled.img`
  height: 4.8rem;
  width: 4.8rem;
  border-radius: 50%;
  margin-right: -1.6rem;
  border: 2px solid #fdf2e9;

  &:last-child {
    margin: 0;
  }
`;

const ReviewsText = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
`;
const Span = styled.span`
  color: #0d8b9f;
  font-weight: 600;
`;
const P = styled.p`
  color: #d2dce1;
  font-weight: 700;
`;
const Reviews = () => {
  return (
    <StyledReviews>
      <ReviewsImgs>
        <Img src="customers/customer-1.jpg" alt="Customer photo" />
        <Img src="customers/customer-2.jpg" alt="Customer photo" />
        <Img src="customers/customer-3.jpg" alt="Customer photo" />
        <Img src="customers/customer-4.jpg" alt="Customer photo" />
      </ReviewsImgs>
      <ReviewsText>
        <P>laptops delivered last year!</P>
        <Span>250,000+</Span>
      </ReviewsText>
    </StyledReviews>
  );
};

export default Reviews;
