// src/lib/openAIApi.js
// Importa la función para obtener la API KEY desde apiKey.js

import dataset from '../data/dataset.js';
import { getApiKey } from './apiKey.js'

export const chatOpenai = (userMessageEl) => {

   const apiKey = getApiKey()
   console.log(apiKey);
   const url = "https://api.openai.com/v1/chat/completions"
   const body = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessageEl }],
      
   }
   const option = {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(body)
   };


   return fetch(url, option)
   .then((response) => response.json())
   .then((dataset) => {
      return dataset;
   })
   .catch((error) => {
      throw error;
   });

   /*obtener la apiKey
   return fetch(url, option)
      .then((result) => {
         
         return result.json()
      })
      .then(dataset=>{
         console.log(dataset)
         return dataset
      })
      .catch((error) => {
         throw error;
      }); */
};





/* Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';


export const communicateWithOpenAI = (messages) => {
   //Aquí es donde debes implementar la petición con fetch o axios
};

export const communicateWithOpenAI = (messages,prompt) => {
   //Aquí es donde debes implementar la petición con fetch o axios

const key=getApiKey();
const configOpenAI ={
  method:'POST',
  headers: {
   'Content-Type': 'appication/json',
   'Authorization': 'Bearer ${key}',
  },
  body: JSON.stringify({
   model: 'gpt-3.5-turbo-1106',
   messages:[
      {
         role: "system",
         content: 'You are ${tour.guideName}: an expert,
      },
      {
         role:"user"
         content: prompt,
      },
   ],
   temperature: 0.3,   
  }),
},
return fetch()
.then(response=>{


   return response.json();
}).then(data =>{
   //
   return data
})
})





};*/