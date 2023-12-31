"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const Page = () => {
  const [book, setBook] = useState({
    isbn: "",
    title: "",
    subtitle: "",
    author: "",
    published: "",
    publisher: "",
    pages: "",
    description: "",
    website: "",
  });

  // const { book_Id } = useParams();
  const book_Id = 349;

  const fetchBookById = async () => {
    try {
      const res = await fetch(`${serverUrl}/api/books/${book_Id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token")
            ? `Bearer ${localStorage.getItem("token")}`
            : `Bearer 1219|7WAlHB0Nt7XGniILoxZsGOFAdGXI1kyQ8JJrwFa8`,
        },
      });
      const data = await res.json();
      if (data.error) {
        alert("Error: " + data.error);
      } else {
        // Parse and format the published date
        const publishedDate = data.published.split(" ")[0]; // Extract date part
        setBook({ ...data, published: publishedDate });
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  useEffect(() => {
    fetchBookById();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${serverUrl}/api/books/${book_Id}/edit`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 1219|7WAlHB0Nt7XGniILoxZsGOFAdGXI1kyQ8JJrwFa8`,
        },
        body: JSON.stringify(book),
      });

      if (res.ok) {
        const data = await res.json();
        alert("Edit book success");
        console.log(data);
      } else {
        const data = await res.json();
        alert("Error: " + data.error);
        console.log(data);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  return (
    <div className="min-h-screen mt-[5rem]">
      <main className="mx-auto my-12 flex flex-col gap-3 bg-white p-5 w-full border border-black rounded-lg">
        <Link
          href="/book"
          className="flex items-center gap-1 font-semibold transition hover:text-neutral-500"
        >
          Back
        </Link>
        <br />
        <section className="flex justify-between">
          <span className="w-1/2">
            <h2 className="text-lg font-semibold text-gray-800">Edit book</h2>
            <div className="text-sm font-medium text-neutral-400">
              Lorem ipsum dolor sit amet
            </div>
          </span>
          <span className="w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="isbn">ISBN</label>
                <br />
                <input
                  type="number"
                  name="isbn"
                  placeholder="ISBN"
                  className="mt-3 w-full rounded-md border border-slate-100 p-3"
                  onChange={(e) => setBook({ ...book, isbn: e.target.value })}
                  value={book.isbn}
                  required
                />
              </div>
              <div>
                <label htmlFor="title">Title</label>
                <br />
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="mt-3 w-full rounded-md border border-slate-100 p-3"
                  onChange={(e) => setBook({ ...book, title: e.target.value })}
                  value={book.title}
                  required
                />
              </div>
              <div>
                <label htmlFor="subtitle">Subtitle</label>
                <input
                  type="text"
                  name="subtitle"
                  placeholder="Subtitle"
                  className="mt-3 w-full rounded-md border border-slate-100 p-3"
                  onChange={(e) =>
                    setBook({ ...book, subtitle: e.target.value })
                  }
                  value={book.subtitle}
                  required
                />
              </div>
              <div>
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  name="author"
                  placeholder="Author"
                  className="mt-3 w-full rounded-md border border-slate-100 p-3"
                  onChange={(e) => setBook({ ...book, author: e.target.value })}
                  value={book.author}
                  required
                />
              </div>
              <div>
                <label htmlFor="published">Published</label>
                <input
                  type="date"
                  name="published"
                  placeholder="Published"
                  className="mt-3 w-full rounded-md border border-slate-100 p-3"
                  onChange={(e) => {
                    // Format the date to "yyyy-MM-dd" format
                    const formattedDate = new Date(e.target.value)
                      .toISOString()
                      .split("T")[0];
                    setBook({ ...book, published: formattedDate });
                  }}
                  value={book.published}
                  required
                />
              </div>
              <div>
                <label htmlFor="publisher">Publisher</label>
                <input
                  type="text"
                  name="publisher"
                  placeholder="Publisher"
                  className="mt-3 w-full rounded-md border border-slate-100 p-3"
                  onChange={(e) =>
                    setBook({ ...book, publisher: e.target.value })
                  }
                  value={book.publisher}
                  required
                />
              </div>
              <div>
                <label htmlFor="pages">Pages</label>
                <input
                  type="number"
                  name="pages"
                  placeholder="Pages"
                  className="mt-3 w-full rounded-md border border-slate-100 p-3"
                  onChange={(e) => setBook({ ...book, pages: e.target.value })}
                  value={book.pages}
                  required
                />
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="mt-3 w-full rounded-md border border-slate-100 p-3"
                  onChange={(e) =>
                    setBook({ ...book, description: e.target.value })
                  }
                  value={book.description}
                  required
                />
              </div>
              <div>
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  name="website"
                  placeholder="Website"
                  className="mt-3 w-full rounded-md border border-slate-100 p-3"
                  onChange={(e) =>
                    setBook({ ...book, website: e.target.value })
                  }
                  value={book.website}
                  required
                />
              </div>
              <div className="mt-3">
                <button
                  type="submit"
                  className="rounded-md bg-black px-3 py-2 text-white transition hover:bg-opacity-80"
                >
                  Edit book
                </button>
              </div>
            </form>
          </span>
        </section>
      </main>
    </div>
  );
};

export default Page;
