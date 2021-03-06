import React from 'react'
import PropTypes from 'prop-types'
// import { Button } from 'react-bootstrap'
import Button from '@material-ui/core/Button'
import { addToCart } from '../../redux/cart/cart.actions'
import { useDispatch } from 'react-redux'

const AddToCart = ({ product }) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(addToCart(product))
    }

    return (
        <div className="add-to-cart mx-auto my-2">
            <Button variant="contained" color="primary" onClick={handleClick}>
                Add to cart
            </Button>
        </div>
    )
}

AddToCart.propTypes = {
    product: PropTypes.object.isRequired
}

export default AddToCart
