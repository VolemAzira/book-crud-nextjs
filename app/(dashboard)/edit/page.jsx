"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const Page = () => {
  const [isbn, setIsbn] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [author, setAuthor] = useState("");
  const [published, setPublished] = useState("");
  const [publisher, setPublisher] = useState("");
  const [pages, setPages] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");

  const handleEdit = async (e) => {
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${serverUrl}/api/books/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 1219|7WAlHB0Nt7XGniILoxZsGOFAdGXI1kyQ8JJrwFa8`,
        },
        body: JSON.stringify({
          isbn,
          title,
          subtitle,
          author,
          published,
          publisher,
          pages,
          description,
          website,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        alert("Add book success");
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
            <h2 className="text-lg font-semibold text-gray-800">Add book</h2>
            <div className="text-sm font-medium text-neutral-400">
              Lorem ipsum dolor sit amet
            </div>
          </span>
          <span className="w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="isbn">isbn</label>
                <br />
                <input
                  type="number"
                  name="isbn"
                  placeholder="isbn"
                  className="mt-3 w-full rounded-md border border-slate-100 p-3"
                  onChange={(e) => setIsbn(e.target.value)}
                  value={isbn}
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
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="subtitle">subtitle</label>
                <input
                  type="text"
                  name="subtitle"
                  placeholder="subtitle"
                  className="mt-3 w-full rounded-md border border-slate-100 p-3"
                  onChange={(e) => setSubtitle(e.target.value)}
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
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="published">published</label>
                <input
                  type="date"
                  name="published"
                  placeholder="published"
                  className="mt-3 w-full rounded-md border border-slate-100 p-3"
                  onChange={(e) => setPublished(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="publisher">publisher</label>
                <input
                  type="text"
                  name="publisher"
                  placeholder="publisher"
                  className="mt-3 w-full rounded-md border border-slate-100 p-3"
                  onChange={(e) => setPublisher(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="pages">pages</label>
                <input
                  type="number"
                  name="pages"
                  placeholder="pages"
                  className="mt-3 w-full rounded-md border border-slate-100 p-3"
                  onChange={(e) => setPages(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="description">description</label>
                <input
                  type="text"
                  name="description"
                  placeholder="description"
                  className="mt-3 w-full rounded-md border border-slate-100 p-3"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="website">website</label>
                <input
                  type="text"
                  name="website"
                  placeholder="website"
                  className="mt-3 w-full rounded-md border border-slate-100 p-3"
                  onChange={(e) => setWebsite(e.target.value)}
                  required
                />
              </div>
              <div className="mt-3">
                <button
                  type="submit"
                  className="rounded-md bg-black px-3 py-2 text-white transition hover:bg-opacity-80"
                >
                  Add book
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
