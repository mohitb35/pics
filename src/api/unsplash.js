import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID NcV8kR20uZg3pTZn0tNqqijNC36HNGxolDe0K9ywrgA'
	}
})