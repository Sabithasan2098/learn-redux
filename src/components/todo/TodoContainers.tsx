import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./todoCard";
import TodoFilter from "./TodoFilter";
const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
        <div className="bg-white p-5 w-full h-full rounded-md space-y-5">
          {todos.map((item) => (
            <TodoCard {...item} key={item.id} />
          ))}
        </div>
        {/* <div className="bg-white p-3 text-2xl font-bold flex justify-center items-center rounded-md space-y-5">
          <p>There is no task to complete</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
