import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
  Tooltip,
  Spinner,
} from "@material-tailwind/react";

export function ProductCard({
  productName,
  productPrice,
  productCategory,
  isAddable = false,
  isRemovable = false,
  remove = () => { },
  add = () => { }

}) {



  return (
    <Card className="mt-6 max-w-screen-lg w-48 px-1 relative">
      <div className="absolute top-4 right-4">
        {isRemovable && <Tooltip content="Remove" placement="top" className="bg-gray-600" animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}>
          <Button variant="text" className=" p-1 bg-transparent" size="sm" onClick={remove}
          >
            <TrashIcon
              className="h-4 lg:h-5 w-4 lg:w-5 text-red-700"

            />
          </Button>
        </Tooltip>}
      </div>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {productName}
        </Typography>
        <Typography>
          {`${productPrice} Rs.`}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        {isAddable ? <>
          <Button variant="gradient" size="sm" fullWidth onClick={add}>ADD</Button>
        </> :
          <Chip variant="gradient" value={productCategory} size="md" />}
      </CardFooter>
    </Card>
  );
}