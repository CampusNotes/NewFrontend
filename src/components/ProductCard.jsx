import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";

export function ProductCard({
  productName,
  productPrice,
  productCategory
}) {

  return (
    <Card className="mt-6 max-w-screen-lg w-80">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {productName}
        </Typography>
        <Typography>
          {`${productPrice} Rs.`}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Chip variant="gradient" value={productCategory} size="md" />
      </CardFooter>
    </Card>
  );
}