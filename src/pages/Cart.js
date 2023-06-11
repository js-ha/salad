import React from 'react';
import photos from '../data/photos';

const Cart = () => {
  // 포토이미지 사용해서 로컬스토리지에 그 상품 이름이 있으면 가져와서 배열에 담아
  // 담은 배열을 밑에서 맵 돌려서 렌더링해주기
  // 사진, 이름, 수량, 칼로리, 그람수, 가격
  // 칼로리, 그람수, 가격 총합 구해주기
  let arr = new Array();

  photos.map((photo, i) => {
    photo.수량 = Number(window.localStorage.getItem(photo.img));
    if (photo.수량 !== 0) {
      arr.push(photo);
    }
  });

  let total = { 칼로리: 0, 그람수: 0, 가격: 0 };
  arr.map((ar) => {
    total.칼로리 = total.칼로리 + ar.kcal * ar.수량;
    total.그람수 = total.그람수 + ar.g * ar.수량;
    total.가격 = total.가격 + ar.price * ar.수량;
  });

  return (
    <div className='main_wrapper'>
      {arr.map((ar, i) => {
        return (
          <div className='content' key={i}>
            <img className='content_photo' src={`${process.env.PUBLIC_URL}/img/${ar.img}.jpg`} />
            <div className='content_btn'>
              <div>{ar.img}/</div>
              <span>{ar.g * ar.수량}g/</span>
              <span>{ar.수량}개/</span>
              <span>{ar.kcal * ar.수량}Kcal/</span>
              <span>{ar.price * ar.수량}원</span>
            </div>
          </div>
        );
      })}
      <div>총 칼로리: {total.칼로리}Kcal</div>
      <div>총 중량: {total.그람수}g</div>
      <div>총 가격: {total.가격}원</div>
      <button
        onClick={() => {
          window.localStorage.clear();
          window.location.href = '/main';
        }}
      >
        장바구니 삭제
      </button>
    </div>
  );
};

export default Cart;
