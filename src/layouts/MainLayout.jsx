import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

const MainLayout = ({ children }) => {
  return (
    <>
      <header className="flex justify-between py-5 px-4">
        <div>Book store</div>
        <div>Placeholder Text </div>
        <div className="flex gap-4">
          <FontAwesomeIcon
            icon={faUser}
            color="gray"
            className="text-xl cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faShoppingCart}
            color="gray"
            className="text-xl cursor-pointer"
          />
        </div>
      </header>

      <main>{children}</main>

      <footer>
        <div className="bg-[url('../assets/footer-bg.png')] bg-cover bg-center py-5">
          <p>Footer</p>
        </div>
      </footer>
    </>
  );
};

export default MainLayout;
