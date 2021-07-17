import React from 'react'
import Card from './Card'

const CardSection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>

        <div className="row">
           <Card cardTitle="Orange"
          cardImage="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="Pear"/>

           <Card cardTitle="Guava" 
           cardImage="https://www.google.com/search?q=image&rlz=1C1ONGR_enIN952IN952&sxsrf=ALeKk03OY4Wv7J_ZtGMEpBGdulP4_texIQ:1626536933619&tbm=isch&source=iu&ictx=1&fir=gxFxsvFBmxeZ9M%252C0JWe7yDOKrVFAM%252C_&vet=1&usg=AI4_-kReDzFRmzDAOj_DsRSOvMu2NwesqQ&sa=X&ved=2ahUKEwiWopGhuurxAhXXYysKHQQyBcwQ9QF6BAgJEAE#imgrc=gxFxsvFBmxeZ9M"
           cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="Apple"/>

           <Card cardTitle="Mango"
           cardImage="https://www.google.com/search?q=image&rlz=1C1ONGR_enIN952IN952&sxsrf=ALeKk03OY4Wv7J_ZtGMEpBGdulP4_texIQ:1626536933619&tbm=isch&source=iu&ictx=1&fir=2DNOEjVi-CBaYM%252CAOz9-XMe1ixZJM%252C_&vet=1&usg=AI4_-kTdHq7xJp3YrXSxF61zau2vMj8IrA&sa=X&ved=2ahUKEwiWopGhuurxAhXXYysKHQQyBcwQ9QF6BAgQEAE#imgrc=2DNOEjVi-CBaYM"
            cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="Pineapple"/>
        </div>
      </div>
    </section>
  )
}
export default CardSection