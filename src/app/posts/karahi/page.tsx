
import Image from "next/image";

export default function Post3() {
  return (
    <>
   
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen mt-20">
      <div className="max-w-7xl w-full bg-white shadow-md rounded-lg p-8">
        <div className="flex justify-center mb-6">
          <Image
            src="/karahi.png"
            alt="Necklace"
            width={600}
            height={400}
            className="rounded-lg w-full h-96"
          />
        </div>

        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">
       Karahi </h1>

        <p className="text-gray-700 text-justify leading-7 mb-6">
 
Karahi is a traditional South Asian dish that is known for its rich flavors and vibrant spices. It is also named after the cooking vessel in which it is prepared—a deep, circular pan known as a "karahi" or "kadai." Here are some key details about karahi:
 </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
        Ingredients </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        Meat: Common choices include chicken, mutton, or beef, which are often cut into small pieces for quick cooking.

Spices: A blend of spices is used, typically including:

Cumin seeds
Coriander powder
Red chili powder
Turmeric
Garam masala
Aromatics: Ingredients like onions, garlic, and ginger are essential, contributing to the dish's flavor base.

Tomatoes: Fresh or canned tomatoes are often added to create a rich sauce.

Herbs: Fresh coriander (cilantro) and green chilies are typically used for garnishing.
</p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
        Cooking Method 
        </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        Sautéing: Onions, garlic, and ginger are sautéed in oil until golden brown.

Adding Meat: The meat is added and cooked until browned.

Spices: Ground spices are mixed in, followed by the addition of tomatoes, which are cooked down to form a thick sauce.

Simmering: The dish is simmered until the meat is tender and the flavors meld together. Sometimes, a splash of water or broth is added to achieve the desired consistency.
 </p>
 <h2 className="text-2xl font-semibold text-blue-500 mb-3">
 Variations
        </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        Chicken Karahi: The most popular version, often prepared with a tangy tomato base and spicy flavors.

Mutton Karahi: Richer and more flavorful, this version typically requires longer cooking to tenderize the meat.

Vegetable Karahi: A vegetarian version made with seasonal vegetables, often seasoned similarly to meat-based versions.
</p>
<h2 className="text-2xl font-semibold text-blue-500 mb-3">
Serving
        </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        Karahi is typically served hot with:

Naan or Roti: Flatbreads that complement the dish.
Rice: Basmati rice or plain steamed rice may also be served alongside.</p>
            
<h2 className="text-2xl font-semibold text-blue-500 mb-3">
Cultural Significance
        </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        Karahi is a staple dish at family gatherings, celebrations, and special occasions. It reflects the essence of South Asian cooking, showcasing the use of spices and the communal aspect of sharing meals. The dish is often enjoyed in restaurants and homes alike, embodying a sense of comfort and tradition.
        </p> </div>
    </div>
 
</>
  );
}