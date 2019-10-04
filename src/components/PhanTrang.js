import React, { Component } from 'react'
import PhanTrangItem from './PhanTrangItem';

export default class componentName extends Component {
    phanTrang = (soTrang)=>{
        let tam=[];

        //page là trang hiện tại đang ở
        //pageCurrent là trang được gửi để render
        let {page}=this.props;
        let {getPage} = this.props;
        tam.push(<PhanTrangItem key={0} pageCurrent={page>1?page-1:page} getPage={getPage} pageName={<i className="fas fa-chevron-circle-left"></i>}/>);
        for (let i=1; i<soTrang+2; i++){
            tam.push(<PhanTrangItem key={i} pageCurrent={i} getPage={getPage} pageName={i}/>);
            // tam.push(<button>{i}</button>);
        }
        tam.push(<PhanTrangItem key={soTrang+2} pageCurrent={page===soTrang+1?page:page+1} getPage={getPage} pageName={<i className="fas fa-chevron-circle-right"></i>}/>);
        
        return tam;
    }
    render() {
        let {tongSoTrang} = this.props;
        return (
            <div className="divPhanTrang">
                {this.phanTrang(tongSoTrang)}
            </div>
        )
    }
}
