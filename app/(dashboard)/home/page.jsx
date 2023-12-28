import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

const dashboard = () => {
  return (
    <main className="flex flex-col gap-10">
      <h1 className="text-2xl font-bold text-center">Dashboard Page</h1>
      <section className="flex flex-col gap-5">
        <Link href={"/add"}>
          <button className="bg-primary text-white px-3 py-2 rounded font-semibold hover:bg-primary/80 transition-all duration-100 ease-in-out">
            Add New Product
          </button>
        </Link>
        <div className="overflow-x-auto shadow">
          <Table>
            <TableHead>
              <TableHeadCell>Product name</TableHeadCell>
              <TableHeadCell>Color</TableHeadCell>
              <TableHeadCell>Category</TableHeadCell>
              <TableHeadCell>Price</TableHeadCell>
              <TableHeadCell>
                <span className="sr-only">Edit</span>
              </TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {'Apple MacBook Pro 17"'}
                </TableCell>
                <TableCell>Sliver</TableCell>
                <TableCell>Laptop</TableCell>
                <TableCell>$2999</TableCell>
                <TableCell className="flex gap-3">
                  <Link
                    href="/edit"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    className="font-medium text-red-600 hover:underline dark:text-red-500"
                  >
                    Delete
                  </a>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </main>
  );
};

export default dashboard;
