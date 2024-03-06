import { useNavigate } from "react-router-dom/dist";
import Button from "../ui/Button";
import { useLaptop } from "../features/laptops/useLaptop";
import Row from "../ui/Row";
import styled from "styled-components";
import { useMoveBack } from "../hooks/useMoveBack";
import Spinner from "../ui/Spinner";
import Heading from "../ui/Heading";
import ButtonText from "../ui/ButtonText";
import Description from "../ui/Description";
import ButtonGroup from "../ui/ButtonGroup";
import { useAddFavorite } from "../features/laptops/useAddFavorite";
import { useAddToCart } from "../features/laptops/useAddToCart";

const StyledProduct = styled.section`
  width: 100%;
  height: 90vh;
  padding: 5rem 0;
  background-color: var(--color-primary);
`;

const Container = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 0 auto;
`;
const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
`;
const NormalContent = styled.p`
  margin-left: 13rem;
  color: var(--color-secondary);
  font-weight: 700;
  font-size: 17px;
  border-radius: 5px;
`;

const Badge = styled.p`
  width: 140px;
  padding: 8px 4px;
  margin-left: 13rem;
  background: var(--gradient);
  color: var(--color-primary);
  font-weight: 700;
  font-size: 17px;
  border-radius: 5px;
  text-transform: uppercase;
`;

const Img = styled.img``;
function Product() {
  const { isLoading, laptop } = useLaptop();
  const moveBack = useMoveBack();

  const navigate = useNavigate();
  const { isCreating, addFavoriteLaptop } = useAddFavorite();
  const { isCreating: isCreating2, addCartLaptop } = useAddToCart();
  console.log(laptop);

  function addToFavorites() {
    addFavoriteLaptop({ ...laptop });
  }

  function addToCart() {
    addCartLaptop({ ...laptop });
  }
  if (isLoading) return <Spinner />;
  if (!laptop) return <Empty resourceName="laptop" />;
  return (
    <StyledProduct>
      <Container>
        <Row type="horizontal">
          <HeadingGroup>
            <Heading as="h1">Laptop # {laptop?.id}</Heading>
            {/* <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag> */}
          </HeadingGroup>
          <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
        </Row>

        <Row type="horizontal">
          <Img src={laptop?.image} />
          <Content>
            <Row type="horizontal">
              <Badge>{laptop?.category}</Badge>
              <Badge>{laptop?.company}</Badge>
            </Row>
            <Heading as="h1">{laptop?.name}</Heading>
            <Description as="h4">{laptop?.description}</Description>

            <NormalContent>Price : ${laptop?.price}</NormalContent>
            <NormalContent>Color : {laptop?.color}</NormalContent>
            <ButtonGroup type="singleProduct">
              <Button onClick={addToCart} size="large">
                Add To Cart
              </Button>

              <Button onClick={addToFavorites} size="medium">
                Add To Favorites
              </Button>
            </ButtonGroup>
          </Content>
        </Row>
      </Container>
    </StyledProduct>
  );
}

export default Product;
