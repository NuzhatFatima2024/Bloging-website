
import Image from "next/image";

export default function Post4() {
  return (
    <>
   
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen mt-20">
      <div className="max-w-7xl w-full bg-white shadow-md rounded-lg p-8">
        <div className="flex justify-center mb-6">
          <Image
            src="/shami.png"
            alt="Earings"
            width={600}
            height={400}
            className="rounded-lg w-full h-96"
          />
        </div>

        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">
        Shami Kabab  </h1>

        <p className="text-gray-700 text-justify leading-7 mb-6">
        Shami Kabab is a popular South Asian dish, particularly cherished in Indian and Pakistani cuisine. Known for its soft texture and rich flavor, it is often served as an appetizer or snack during special occasions and gatherings. Here are some detailed aspects of Shami Kabab:
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
        1. Ingredients
        </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        Meat: Typically made with minced meat, such as beef, mutton, or chicken.

Lentils: Yellow split chickpeas (chana dal) are commonly used, adding texture and protein to the kababs.

Spices: A blend of spices enhances the flavor, usually including:

Cumin
Coriander
Garam masala
Red chili powder
Turmeric
Black pepper
Aromatics: Ingredients like onions, garlic, and ginger are included to create a flavorful base.

Herbs: Fresh cilantro (coriander leaves) and green chilies are often added for freshness and heat.
 </p>

 

        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          2.Cooking Method
        </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        Boiling: The meat and lentils are boiled together until tender. This step allows the flavors to meld.

Grinding: Once cooked, the mixture is drained and ground into a fine paste. This can be done in a food processor or a traditional mortar and pestle.

Shaping: The mixture is seasoned with additional spices and formed into small patties or discs.

Frying: The patties are then shallow-fried in oil until golden brown and crispy on the outside.
</p>
     

        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          3. Serving
        </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        Shami Kababs are typically served hot with:

Mint Chutney: A refreshing dip that balances the spice of the kababs.
Onion Rings: Sliced onions, often served alongside.
Lemon Wedges: For a tangy addition to the flavors.
</p>
<h2 className="text-2xl font-semibold text-blue-500 mb-3">
          4. Variations
        </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        Stuffed Shami Kabab: Some versions include a filling of cheese or boiled eggs for added richness.
        Vegetarian Shami Kabab: A vegetarian adaptation can be made using mashed potatoes and spices, offering a similar texture and flavor profile.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          5. Cultural Significance
        </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        Shami Kababs hold a special place in South Asian cuisine and are often featured in festive meals, weddings, and parties. They represent the culinary heritage of the region, showcasing the use of spices and cooking techniques that have been passed down through generations. Whether enjoyed as a snack or as part of a larger meal, Shami Kababs are loved for their delicious taste and unique texture.
         </p>

           </div>
    </div>
    
</>
  );
}