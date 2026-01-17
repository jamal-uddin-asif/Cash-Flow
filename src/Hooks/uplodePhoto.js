// import axios from "axios"

// export const useUplodePhoto =async (image) =>{
//     const formData = new FormData()
//     formData.append('image', image)

//     const url = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`

//     const data = await axios.post(url, formData, {headers: {
//                 'Content-Type': 'multipart/form-data',
//             },})

//     console.log(data)

// }

import axios from "axios";

export const uplodePhoto = async (image) => {
  const formData = new FormData();
  formData.append("image", image);

  const url = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`;

  try {
    const response = await axios.post(url, formData);

    if (response.data.success) {
      console.log("Upload Success:", response.data.data.url);
      return response.data.data.url;
    }
  } catch (error) {
    console.error("Upload Error:", error.response?.data || error.message);
    return null;
  }
};
