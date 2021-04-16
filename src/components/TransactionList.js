import React, { Component } from 'react'
import TransactionForm from './TransactionForm'
import { connect } from "react-redux";
import * as actions from "../actions/transactionActions"
import { bindActionCreators } from "redux";

class TransactionList extends Component {


    handleEdit = (index) => {
        this.props.updateTransactionIndex(index)
    }

    handleDelete = (index) => {
        this.props.deleteTransaction(index)
    }

    render() {
        return (
            <div>
                <TransactionForm />
                <h3 className="text-center">Transactions</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Account No.</th>
                            <th>IFSC</th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.list.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.bAccountNo}</td>
                                <td>{item.iFSC}</td>
                                <td>{item.bName}</td>
                                <td>{item.amount}</td>
                                <td>
                                    <button onClick={() => this.handleEdit(index)}>Edit</button>
                                    <button onClick={() => this.handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateTransactionIndex: actions.updateIndex,
        deleteTransaction: actions.Delete
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)