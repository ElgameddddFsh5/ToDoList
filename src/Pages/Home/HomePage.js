import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./HomePage.css";
import { AiFillEdit, AiFillDelete, AiOutlineCheckCircle } from "react-icons/ai";
import { UserAuth } from "../../context/Auth";
import { db } from "../../context/firebase";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";

function HomePage() {
  const { user, logout } = UserAuth();

  const ProductCartId = doc(db, "users", `${user?.email}`);

  const [Todo, setTodo] = useState("");

  const addTodo = async (e) => {
    e.preventDefault();
    if (Todo.length !== 0) {
      if (user?.email) {
        await updateDoc(ProductCartId, {
          Todo: arrayUnion({
            id: uuid(),
            Todo,
            completed: false,
            date: new Date(),
            time: new Date().toLocaleTimeString(),
          }),
        });
        setTodo("");
      } else {
        alert("Please log in first");
      }
    }
  };

  const [todos, setTodos] = useState([]);

useEffect(() => {
  const unsubscribe = onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
    setTodos(doc.data());
  });

  return () => {
    unsubscribe();
  };
}, [user?.email]);
  const deleteShow = async (passedID) => {
    try {
      const result = todos?.Todo?.filter((item) => item.id !== passedID);
      await updateDoc(ProductCartId, {
        Todo: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const toggleCompleted = async () => {
    try {
      const result = todos?.Todo?.filter((item) => item);
      await updateDoc(ProductCartId, {
        Todo: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="MainTodoContainer">
        <div className="TodoContent my-5 ">
          <div className="GotoLogin">
            {user ? (
              <Link to="/account">Account</Link>
            ) : (
              <Link to="/signup">Sign Up</Link>
            )}
          </div>
          <h2 className="text-center mb-5">To-Do-List</h2>
          <form onSubmit={addTodo}>
            <div className="form-group d-flex  justify-content-between">
              <input
                type="text"
                value={Todo}
                onChange={(e) => setTodo(e.target.value)}
                className="form-control "
                placeholder="Add a to-do"
                style={{ width: "350px", height: "50px" }}
              />
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
          </form>
          <ul className="list-group mt-5 TodoText">
            {todos?.Todo?.map((item) => {
              return (
                <li
                  key={item.id}
                  className="d-flex justify-content-between todoItem"
                >
                  <div className="TodoItemText">
                    <p className="todoItemContent">{item.Todo}</p>
                    <p className="time">{item.time}</p>
                  </div>
                  <p className="completed">
                    {item.completed ? (
                      <AiOutlineCheckCircle
                        size={20}
                        className="Done"
                        onClick={() => {
                          if (item.completed === false) {
                            item.completed = true;
                          } else if (item.completed === true) {
                            item.completed = false;
                          }
                          toggleCompleted(item);
                        }}
                      />
                    ) : (
                      <AiOutlineCheckCircle
                        size={20}
                        onClick={() => {
                          if (item.completed === false) {
                            item.completed = true;
                          } else if (item.completed === true) {
                            item.completed = false;
                          }
                          toggleCompleted(item);
                        }}
                      />
                    )}
                  </p>
                  <div className="TodoEdits">
                    <AiFillDelete
                      size={20}
                      onClick={() => deleteShow(item.id)}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default HomePage;
