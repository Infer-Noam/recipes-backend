import { Recipe } from "../../components/recipe/recipe";

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

const HomePage = () => {
  return (
    <div>
      <Recipe
        recipeName="Cake"
        chefName="Noam Naor"
        creationDate={yesterday}
        steps={[]}
      />
    </div>
  );
};

export default HomePage;
