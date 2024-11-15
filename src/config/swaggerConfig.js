import swaggerJsDoc from 'swagger-jsdoc' 

const swaggerOptions={
    definition: {
        info:{
            title: "Adoption API",
            version: 1.0,
            description: "The Pet Adoption API REST is a robust, cloud-based platform built on Node.js, designed to streamline the process of pet adoption. It connects potential adopters with shelters and rescues, increasing the chances of finding loving homes for animals in need."
            
        }
    },
    apis: [`src/docs/**/*/*.yaml`]
}

export const specs = swaggerJsDoc(swaggerOptions)