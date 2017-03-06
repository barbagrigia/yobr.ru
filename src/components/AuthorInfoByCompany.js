import React from 'react'
import { Link } from 'react-router'

const AuthorInfoByCompany = ({ company: { id, nick, name, avatar, specialization, contacts, rating }}) => (
  <div className="author-info" id={`company_${id}`}>
    <Link to={`/company/${nick}/`} className="author-info__image">
      <img src={avatar} className="author-info__image-pic" alt={name} />
    </Link>
    <div className="author-info__desc">
      <div className="author-info__username">
        <Link to={`/company/${nick}/`} className="author-info__name">{name}</Link>
        <div className="user-rating">
          <span className="user-rating__label">рейтинг</span>
          <span className="user-rating__value">{rating}</span>
        </div>
        <div className="author-info__buttons buttons">
          <button type="button" data-company_id={id} className="btn btn_subscribe_company btn_subscribed js-remove_company_member hidden">Подписан</button>
          <button type="button" data-company_id={id} className="btn btn_subscribe_company js-add_company_member">Подписаться</button>
        </div>
      </div>
      { !!specialization && <div className="author-info__specialization">{specialization}</div> }
      { !!contacts && contacts.length > 0 &&
        <ul className="author-info__contacts user-contacts">
          { contacts.map(contact => <li className="user-contacts__item" key={contact.type}><Link to={contact.url} target="_blank">{contact.type}</Link></li>) }
        </ul>
      }
    </div>
  </div>
)

export default AuthorInfoByCompany
