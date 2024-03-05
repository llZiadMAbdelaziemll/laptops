import styled from "styled-components";
import { useUser } from "./useUser";
import { useNavigate } from "react-router-dom";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-primary);
  margin-right: 1.5rem;
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-primary);
`;
const Span = styled.span`
  font-weight: 500;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
function UserAvatar() {
  const { user } = useUser();
  const navigate = useNavigate();
  const avatar = user?.user_metadata?.avatar;
  const name = user?.user_metadata?.name;
  console.log(user);
  return (
    <StyledUserAvatar onClick={() => navigate("/account")}>
      <Avatar src={avatar || "default-user.jpg"} alt={`Avatar of ${name}`} />
      <Span>{name}</Span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
