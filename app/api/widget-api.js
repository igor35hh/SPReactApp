import axios from 'axios';
import store from '../store';
import { getWidgetsSuccess, deleteWidgetSuccess } from '../actions/widget-actions';

export function getWidgets() {
	return axios.get('http://localhost:3001/widgets').then(response => {
		store.dispatch(getWidgetsSuccess(response.data));
		return response;
	});
}

export function searchWidgets(query='') {
	return axios.get('http://localhost:3001/widgets?q='+query).then(response => {
		store.dispatch(getWidgetsSuccess(response.data));
		return response;
	});
}

export function deleteWidget(widgetId) {
	return axios.delete('http://localhost:3001/widgets/'+widgetId).then(response => {
		store.dispatch(deleteWidgetSuccess(widgetId));
		return response;
	});
}