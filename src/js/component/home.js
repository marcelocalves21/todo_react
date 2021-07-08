import React, { useState } from "react";

export function Home() {
	const [list, setList] = useState([]);
	const [todo, setTodo] = useState("");

	return (
		<div className="text-center mt-5">
			<h1>Todo</h1>
			<input
				className="m-3"
				value={todo}
				placeholder="What needs to be done?"
				onChange={e => setTodo(e.target.value)}
			/>
			<button
				className="btn btn-success"
				onClick={() => {
					setList([...list, todo]);
					setTodo("");
				}}>
				add
			</button>
			{list.map((element, index) => (
				<div key={index}>
					{element}
					<button>x</button>
				</div>
			))}
		</div>
	);
}
