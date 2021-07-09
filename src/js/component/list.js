import React, { useState } from "react";

const List = () => {
	const [list, setList] = useState([]);
	const [todo, setTodo] = useState("");
	return (
		<div>
			<h1>todo</h1>
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
					<button
						onClick={() =>
							setList(list.filter(word => word !== element))
						}>
						x
					</button>
				</div>
			))}
			{list.length === 0 ? (
				""
			) : list.length === 1 ? (
				<div>
					<p>{list.length} item left</p>
				</div>
			) : (
				<div>
					<p>{list.length} items left</p>
				</div>
			)}
		</div>
	);
};

export default List;
