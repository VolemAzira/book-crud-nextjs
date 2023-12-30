"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Table } from "flowbite-react";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const dashboard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchbooks = async () => {
      try {
        const res = await fetch(`${serverUrl}/api/books`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${localStorage.getItem("token")}`,
            Authorization: `Bearer 1219|7WAlHB0Nt7XGniILoxZsGOFAdGXI1kyQ8JJrwFa8`,
          },
        });

        const data = await res.json();

        if (data.error) {
          alert("Error: " + data.error);
        } else {
          setBooks(data);
        }
      } catch (error) {
        console.error("Unexpected error:", error);
      }
    };
    fetchbooks();
  }, []);

  const handleDelete = async (id) => {
    const res = await fetch(`${serverUrl}/api/books/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setBooks(books.filter((book) => book.id !== id));
    }
  };

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
            <Table.Head>
              <Table.HeadCell>Isbn</Table.HeadCell>
              <Table.HeadCell>Title</Table.HeadCell>
              <Table.HeadCell>Subtitle</Table.HeadCell>
              <Table.HeadCell>Author</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {Array.isArray(books.data) && books.data.length > 0 ? (
                books.data.map((book) => (
                  <Table.Row
                    key={book.id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell>{book.isbn}</Table.Cell>
                    <Table.Cell>{book.title}</Table.Cell>
                    <Table.Cell>{book.subtitle}</Table.Cell>
                    <Table.Cell>{book.author}</Table.Cell>
                    <Table.Cell className="flex gap-3">
                      <Link
                        href={`/edit/${book.id}`}
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        Edit
                      </Link>
                      <a
                        href="#"
                        className="font-medium text-red-600 hover:underline dark:text-red-500"
                        onClick={() => handleDelete(book.id)}
                      >
                        Delete
                      </a>
                    </Table.Cell>
                  </Table.Row>
                ))
              ) : (
                <p>No books available.</p>
              )}
            </Table.Body>
          </Table>
        </div>
      </section>
    </main>
  );
};

export default dashboard;
