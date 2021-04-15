import React, { useState } from 'react';
import styles from './Footer.module.css';

function Footer() {
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch ("/api/sendMessage",{
      method: "POST", 
      body: JSON.stringify({email,message})
    })
  }

  return (
    <div className={styles.footer_container}>
      <section className={styles.footer_subscription}>
        <p className={styles.footer_subscription_heading}>
          Данное web-приложение было создано для защиты магистерской диссертации
        </p>
        <p className={styles.footer_subscription_text}>
          Вы можете оставить отзыв:
        </p>
        <div>
          <form className={styles.message_form} onSubmit={handleSubmit}>
            <div>
              <input onChange={(e)=>{
                setEmail(e.target.value)
              }}
                className={styles.footer_input}
                name='email'
                type='email'
                placeholder='Введите ваш E-mail'
              />

              
                <button className={styles.messageButton} type='submit'>Отправить</button>
              

            </div>
              <textarea onChange={(e)=>{
                setMessage(e.target.value)
              }}
                className={styles.footer_container_box}
                cols='40'
                rows='12'
                placeholder='Введите ваше сообщение'
              />
          </form>
        </div>
      </section>
    </div>
  );
}

export default Footer;