import AjaxService from "./";

export default class Plans extends AjaxService{
    getPlans( body = {}) {
        const payload = {
            action: this.action,
            ...this.payload,
            ...body
        }
        
        return this.axios({
            method: 'post',
            url: this.url,
            data: this.getQueryString( payload ),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then( res => res.data );
    }
}