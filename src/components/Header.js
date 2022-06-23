import './Header.css'
import netFlix from '../img/netflix.png'


export default ({black}) => {
  
	return(
		<header className={black ? 'black' : ''}>
		<div className="header--logo">
			<a href="/">
				<img src={netFlix} alt="Netflix" />
			</a>
		</div>
		<div className="header--user">
			<a href="/">
				<img src="https://i.pinimg.com/originals/2b/90/0d/2b900d5612554cd0b5edf7d8e848c3ea.png" alt="Usuário" />
			</a>
		</div>
	</header>
	)
}