import React from 'react';

const Section3 = () => {
  return (
    <section className="section section_3" id="section_3">
      <h2>私たちの製品</h2>
      <div className="card_wrap">
        <div className="card card_1">
          <img src="/images/Images/Home/Section_3/Food_Ingredients.webp" alt="Food Ingredients" />
          <div className="card_label">
            <span>食品原料</span>
          </div>
        </div>
        <div className="card card_2">
          <img src="/images/Images/Home/Section_3/Industrial_Raw_Materials.webp" alt="Industrial Materials" />
          <div className="card_label">
            <span>工業材料</span>
          </div>
        </div>
        <div className="card card_3">
          <img src="/images/Images/Home/Section_3/Feed_Ingredients.webp" alt="Feed Ingredients" />
          <div className="card_label">
            <span>飼料原料</span>
          </div>
        </div>
        <div className="card card_4">
          <img src="/images/Images/Home/Section_3/Fertilizer_Ingredients.webp" alt="Fertilizer Ingredients" />
          <div className="card_label">
            <span>肥料原料</span>
          </div>
        </div>
        <div className="card card_5">
          <img src="/images/Images/Home/Section_3/Cosmetic_Ingredients.webp" alt="Cosmetic Ingredients" />
          <div className="card_label">
            <span>化粧品原料</span>
          </div>
        </div>
        <div className="card card_6">
          <img src="/Images/Home/Section_3/Pharmaceutical_Ingredients.webp" alt="Pharmaceutical Ingredients" />
          <div className="card_label">
            <span>医薬品原料</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
