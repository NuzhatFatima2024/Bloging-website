
import Image from "next/image";

export default function Post2() {
  return (
    <>
  
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen mt-20">
      <div className="max-w-7xl w-full bg-white shadow-md rounded-lg p-8">
        <div className="flex justify-center mb-6">
          <Image
            src="/kabab.png"
            alt="Kangan"
            width={600}
            height={400}
            className="rounded-lg w-full h-96"
          />
        </div>

        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">
        Kabab </h1>

        <p className="text-gray-700 text-justify leading-7 mb-6">
        Kabab (or Kebab) refers to a variety of grilled or roasted meat dishes popular in Middle Eastern, South Asian, and Mediterranean cuisines. The term encompasses a range of styles and flavors, but here are some key details about kababs:
        </p>
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          1. Seekh Kabab:
        </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        Minced meat (usually beef, mutton, or chicken) is mixed with spices, shaped onto skewers, and grilled over an open flame. It's known for its juicy texture and robust flavors.
        </p>
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          2. Ingredients:
        </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        Meat: Common choices include chicken, lamb, beef, and fish, often marinated for tenderness and flavor.
Spices: A blend of spices such as cumin, coriander, turmeric, garam masala, and chili powder are typically used, along with garlic and ginger.
Herbs: Fresh herbs like cilantro, mint, and parsley may be included in marinades or served as garnishes. </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          3.     Cooking Method </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        Kababs are traditionally cooked over an open flame or on a grill, which imparts a smoky flavor. They can also be pan-fried or baked, depending on the type of kabab and regional preferences.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
         4. Serving </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        Kababs are typically served hot, accompanied by:

Chutneys: Mint or tamarind chutney for dipping.
Flatbreads: Naan, roti, or pita for wrapping or serving alongside.
Salads: Fresh salads with onions, cucumbers, and tomatoes. </p>
       
      
    <h2 className="text-2xl font-semibold text-blue-500 mb-3">
         4. Cultural Significance </h2>
        <p className="text-gray-700 text-justify leading-7 mb-6">
        Kababs are not just a staple in many cuisines but also a symbol of culinary heritage, often associated with street food culture and festive gatherings. Their versatility and rich flavors make them a popular choice for appetizers, snacks, or main courses in restaurants and at home.
        </p>
        </div>
   </div>
    </>
  );}
