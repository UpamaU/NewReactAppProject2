import React from 'react';
import { useParams } from 'react-router-dom';
import alfredopic from './images/alfredo.png';
import veggiestirfrypic from './images/veggiestirfry.png';
import chocolatecake from './images/chocolatecake.png';
import './RecipeDetail.css';

const RecipeDetail = () => {
  const { id } = useParams();

  const recipes = {
    1: {
      id: 1,
      name: 'Chicken Alfredo',
      rating: 4.5,
      image: alfredopic,
      content: 'This easy Chicken Alfredo recipe includes golden pan-fried chicken breasts and tender noodles, coated in the most dreamy cream sauce ever!',
      cookingTime: '33 minutes',
      servings: '6',
      difficulty: 'Medium',
      ingredients: [
        '16 ounces dry fettuccine pasta',
        '1 pound boneless, skinless chicken breasts',
        '1 teaspoon Italian seasoning',
        '3/4 teaspoon kosher salt',
        '1/4 teaspoon pepper',
        '2 tablespoons extra-virgin olive oil',
        '1 tablespoon butter',
        '1/2 cup butter , cut into large cubes or slices',
        '2 cups heavy whipping cream',
        '1 clove garlic , minced',
        '3/4 teaspoon garlic powder',
        '3/4 teaspoon Italian Seasoning',
        '1/4 teaspoon salt',
        '1/4 teaspoon pepper',
        '2 cups freshly grated Parmesan cheese'
      ],
      directions: [
        'Make the noodles: Bring a large pot of salted water to a boil. Add the fettuccine and cook until al dente according to package directions, usually 10 minutes. Reserve 1/2 cup of the cooking water, then drain well. Set aside.',
        'Make the chicken: Season chicken breasts with the Italian seasoning, salt, and pepper. Warm the olive oil over medium-high heat in a large nonstick skillet. Once it’s shimmering, swirl the pan to evenly distribute. Add the chicken and leave it undisturbed for 5-7 minutes, until the bottom is golden-brown. Flip over and add in 1 tablespoon of butter between them, picking up the pan to give it a gentle swirl to distribute. Continue cooking for another 5-7 minutes (or an internal temperature reaches 165 degrees F.) Transfer the chicken to a cutting board and let rest for 3 minutes. Cut into 1/2-inch-thick slices. Tent with foil while you prepare the sauce.',
        'Make the Alfredo sauce: In the same pan, over medium-low heat, add the butter and cream; whisk until butter has melted. Add in the minced garlic, garlic powder, Italian seasoning, salt, and pepper; whisk until combined and smooth. Bring to a gentle simmer (do not boil) and cook for 3-4 minutes, whisking constantly, until it starts to thicken. Stir in the parmesan cheese just until melted and the sauce is smooth. (If the sauce ends up too thick, add some of the reserved pasta cooking water, a few tablespoons at a time, to thin it out.)',
        'Assemble: Take sauce off the heat and immediately toss with the cooked fettuccine noodles. Divide the pasta among serving bowls and top with a few slices of chicken. Garnish with parsley, more Parmesan, and black pepper if desired.'
      ],
      reviews: [
        { id: 1, username: 'Foodie123', rating: 5, review: 'Absolutely delicious! One of the best Alfredos I have ever had.' },
        { id: 2, username: 'ChefMaster', rating: 4, review: 'Great recipe! Simple yet very flavorful.' }
      ]
    },
    2: {
      id: 2,
      name: 'Vegetable Stir Fry',
      rating: 4.2,
      image: veggiestirfrypic,
      content: 'Vegetable stir fry is a quick one-pan dish ready in under 30 minutes. Sauteed veggies in an easy sweet and savory stir fry sauce. The perfect recipe when craving Asian takeout that can be made at home.',
      cookingTime: '25 minutes',
      servings: '4',
      difficulty: 'Easy',
      ingredients: [
        '1 large carrot, sliced',
        '2 cups medium broccoli florets',
        '8 oz can baby corn spears, drained',
        '8 oz mushrooms (white or brown), sliced or quartered',
        '1 whole pepper (red, yellow or orange), seeded and sliced',
        '2 Tbsp cooking oil (extra light olive oil or canola)',
        '2 Tbsp unsalted butter',
        '3 garlic cloves, peeled and minced',
        '2 tsp ginger, minced',
        '1/4 cup chicken broth (or vegetable broth for vegetarian)',
        '½ tsp cornstarch',
        '3 Tbsp low sodium soy sauce (use Tamari for gluten free)',
        '2 Tbsp honey',
        '¼ tsp hot sauce, optional (Frank\'s or Sriracha work great)'
      ],
      directions: [
        'In a large non-stick skillet or wok, over medium heat, heat the oil. Add the vegetable and stir fry about 3 minutes or until vegetables are crisp-tender. Add the butter, garlic, ginger and cook until fragrant.',
        'In a small bowl, combine all the ingredients for the stir fry sauce. Pour the sauce over the vegetables and stir.',
        'Turn heat down to medium/low and cook 3-4 minutes, until sauce thickens and vegetables are desired tenderness.'
      ],
      reviews: [
        { id: 1, username: 'HealthyEater', rating: 4, review: 'Quick and healthy meal option, loved it!' },
        { id: 2, username: 'VeggieFan', rating: 5, review: 'Delicious! Perfect combination of flavors.' }
      ]
    },
    3: {
      id: 3,
      name: 'Chocolate Cake',
      rating: 4.8,
      image: chocolatecake,
      content:
        'This homemade chocolate cake recipe is super easy to prepare in one bowl for a deliciously moist and fluffy chocolate cake. This is the best chocolate cake I have ever had! Frost with your favorite frosting.',
      cookingTime: '1 hour',
      servings: '24',
      difficulty: 'Medium',
      ingredients: [
        '2 cups white sugar',
        '1 ¾ cups all-purpose flour',
        '¾ cup unsweetened cocoa powder',
        '1 ½ teaspoons baking powder',
        '1 ½ teaspoons baking soda',
        '1 teaspoon salt',
        '2 large eggs',
        '1 cup milk',
        '½ cup vegetable oil',
        '2 teaspoons vanilla extract',
        '1 cup boiling water'
      ],
      directions: [
        'Preheat the oven to 350 degrees F (175 degrees C). Grease and flour two 9-inch round baking pans.',
        'Stir sugar, flour, cocoa, baking powder, baking soda, and salt together in a large bowl.',
        'Add eggs, milk, oil, and vanilla; mix for 2 minutes on medium speed with an electric mixer.',
        'Stir in the boiling water. The batter will be thin.',
        'Pour evenly into the prepared pans.',
        'Bake in the preheated oven until a toothpick inserted into the center comes out clean, about 30 to 35 minutes. Cool in the pans for 10 minutes, then transfer to a wire rack to cool completely.'
      ],
      reviews: [
        { id: 1, username: 'SweetTooth', rating: 5, review: 'Best chocolate cake ever! Moist and decadent.' },
        { id: 2, username: 'BakerExtraordinaire', rating: 4, review: 'Great recipe, very easy to follow.' },
      ],
    },
  };

  const recipe = recipes[id];

  if (!recipe) {
    return <div className="recipe-detail">Recipe not found!</div>;
  }

  return (
    <div className="recipe-detail">
      <img src={recipe.image} alt={recipe.name} className="recipe-detail-image" />
      <div className="recipe-info">
        <h1>{recipe.name}</h1>
        <div className="recipe-rating">
          <p>⭐ {recipe.rating}</p>
        </div>
        <p className="recipe-content">{recipe.content}</p>
        <div className="recipe-details">
          <h2>Details</h2>
          <p>Cooking Time: {recipe.cookingTime}</p>
          <p>Servings: {recipe.servings}</p>
          <p>Difficulty: {recipe.difficulty}</p>
        </div>
        <div className="recipe-section">
          <h2>Ingredients</h2>
          <ul className="recipe-ingredients">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="recipe-section">
          <h2>Directions</h2>
          <ol className="recipe-directions">
            {recipe.directions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
        <div className="reviews">
          <h2>Reviews</h2>
          {recipe.reviews.map((review) => (
            <div key={review.id} className="review">
              <p><strong>{review.username}</strong> rated it ⭐ {review.rating}</p>
              <p>{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
