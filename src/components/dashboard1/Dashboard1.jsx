import React, { Component } from "react";
import "./Dashboard1.css";
import { Link } from "react-router-dom";
import readXlsxFile, { readSheetNames } from 'read-excel-file';
import { addFabricationItem, addSubAssembly, addAssembly, findInFabrication, findInSubAssembly } from '../../firebase/db';

class Dashboard1 extends Component {

  constructor (props) {
    super(props); 
    this.state = {
      file : null
    }
    
    this.handleUpload = this.handleUpload.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      file : e.target.files[0]
    })
  };

  formatDate = (d) => {
    if (typeof d != "string") {
      return d;
    } 
    var c = d.split('/')
    return new Date (c[1]+'/'+c[0]+'/'+c[2]) 
  }

  isSubAssemblyRedundant = (item, date) => {
    if (item[0] != 'T') {
      return false;
    }
    
    findInFabrication(item, date).then((data) => {
      console.log(data);
    });
    
    return false;
  }
  
  isAssemblyRedundant = (processId, date) => {
    return findInSubAssembly(processId, date);
  }

  handleUpload = () => {
    readSheetNames(this.state.file).then((sheetNames) => {
      sheetNames.forEach(sheetName => {
        if (sheetName.toLowerCase() == 'fabrication') {
          readXlsxFile(this.state.file, { sheet: 'fabrication' }).then((data) => {
            data.forEach(ele => { 
              if (ele[1].toLowerCase() != 'item id') {
                const item = ele[0];
                const item_id = ele[1];
                const raw_material = ele[2];
                const quantity = ele[3];
                const in_date = this.formatDate(ele[4]);
                const out_date = this.formatDate(ele[5]);

                addFabricationItem(in_date, item, item_id, out_date, quantity, raw_material);
              }  
            });
          })
        } else if (sheetName.toLowerCase() == 'sub-assembly') {
          readXlsxFile(this.state.file, { sheet: 'sub-assembly' }).then((data) => {
            data.forEach(ele => {
              if (ele[1].toLowerCase() != 'process') {
                const assembly_id = ele[0] + '_' + ele[3];
                const process = ele[1];
                const item_id = ele[2];
                const machine_id = ele[3];
                const start_date = this.formatDate(ele[4]);
                const end_date = this.formatDate(ele[5]);

                const is_redundant =  this.isSubAssemblyRedundant(item_id, start_date);

                addSubAssembly(assembly_id, process, item_id, machine_id, start_date, end_date, is_redundant);
              }  
            });
          })
        } else if (sheetName.toLowerCase() == 'assembly') {
          readXlsxFile(this.state.file, { sheet: 'assembly' }).then((data) => {
            data.forEach(ele => {
              if (ele[0].toLowerCase() != 'process') {
                const process_id = ele[0];
                const process = ele[1];
                const machine_id = ele[2];
                const start_date = this.formatDate(ele[3]);
                const end_date = this.formatDate(ele[4]);

                const is_redundant = this.isAssemblyRedundant(process_id, start_date);

                addAssembly(process_id, process, machine_id, start_date, end_date, is_redundant);
              }  
            });
          })
        }
      });
    })
  };

  render() {
    return (
      <div className="layout">
        <div className="navigate"></div>
        <input className="upload" type="file" id="excel_file" onChange={this.handleChange}/>
        <button className="button" onClick={this.handleUpload}>Upload</button>  
      </div> 
    );
  }
};

export default Dashboard1;
