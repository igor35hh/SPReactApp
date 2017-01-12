import axios from 'axios';

export function getWidgets() {
	return axios.get('http://localhost:3001/widgets').then(response => response.data);
}

export function deleteWidget(widgetId) {
	return axios.delete('http://localhost:3001/widgets/'+widgetId);
}