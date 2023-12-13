import React, { useEffect } from 'react'
import './home.scss'
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '@actions/user';
export default function Home() {
  const store = useSelector(store => store)
  const dispatch = useDispatch();
  console.log("store.userStore?.data?", store.userStore?.data);
  useEffect(() => {
    dispatch(userActions.authenToken())
  }, [])
  return (
    <header className="header">
      <div className="logo-container">
        Logo
      </div>
      <div className="blog-container">
        <p className="blog-name">Blog</p>
      </div>
      <div className="img-container">
        <div>
          <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg" alt="Ảnh" className="header-img" />
        </div>
        <div className='username'>
          {store.userStore?.data?.name != "" ? store.userStore?.data?.name : store.userStore?.data?.username}
        </div>
      </div>
    </header>
  )
}

