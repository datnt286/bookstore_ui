import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function Detail({ data }) {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    var absolute_path;

    if (!data || !data.absolute_path) {
        if (!data || !data.images || data.images.length === 0) {
            return null;
        }

        ({ absolute_path } = data.images[0] || {});
    }

    const handleQuantityChange = (value) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + value));
    };

    const handleQuantityInputChange = (event) => {
        const value = parseInt(event.target.value);
        setQuantity(Math.max(1, value));
    };

    const handleAddToCart = () => {
        var product = {
            id: data.id,
            name: data.name,
            price: data.price,
            quantity: isNaN(quantity) ? 1 : quantity,
            slug: data.slug,
            image: data.absolute_path || (data.images && data.images.length > 0 ? data.images[0].absolute_path : null),
            ...(data.is_combo ? { combo_id: data.id, book_id: null } : { book_id: data.id, combo_id: null }),
        };

        dispatch(addToCart(product));

        Swal.fire({
            icon: 'success',
            title: 'Thêm vào giỏ hàng thành công!',
            timer: 2000,
        });
    };

    const handleAddToWishlist = () => {
        var wishlist = localStorage.getItem('wishlist');

        if (wishlist == null) {
            wishlist = [data];
        } else {
            wishlist = JSON.parse(wishlist);
            var index = wishlist.findIndex((item) => item.slug === data.slug);

            if (index === -1) {
                wishlist.push(data);
            }
        }

        localStorage.setItem('wishlist', JSON.stringify(wishlist));

        Swal.fire({
            icon: 'success',
            title: 'Thêm vào Wishlist thành công!',
            timer: 2000,
        });
    };

    return (
        <>
            <div className="col-md-5 col-md-push-2">
                <div id="product-main-img">
                    <div id="product-main-image" className="product-preview">
                        <img src={data.absolute_path || absolute_path} alt={`${data.name}`} />
                    </div>
                </div>
            </div>

            <div className="col-md-2  col-md-pull-5">
                {data.images && data.images.length > 0 && (
                    <div id="product-imgs">
                        <div className="product-preview">
                            {data.images.map((image, index) => {
                                return (
                                    <img key={index} src={image.absolute_path} alt={`${image.name}`} className="mb-4" />
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

            <div className="col-md-5">
                <div className="product-details">
                    <h2 className="product-name">{data.name}</h2>

                    <div>
                        <div className="product-rating mt-3">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <a className="review-link" href="#">
                            10 Đánh giá | Thêm đánh giá
                        </a>
                    </div>

                    {!data.is_combo && (
                        <>
                            <ul className="product-links">
                                <li>Thể loại:</li>
                                <li>
                                    <Link to={`/danh-muc/${data.category.slug}`}>{data.category_name}</Link>
                                </li>
                            </ul>

                            <ul className="product-links">
                                <li>Tác giả:</li>
                                {data.authors.map((author) => {
                                    return (
                                        <li>
                                            <a href="#">{author.name}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </>
                    )}

                    <h3 className="product-price mt-4">
                        {data.price} ₫ <del className="product-old-price">990.00 ₫</del>
                    </h3>

                    <div className="add-to-cart">
                        <div className="qty-label d-block mt-4">
                            <span className="mx-4">Số lượng</span>
                            <div className="input-number">
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={handleQuantityInputChange}
                                    className="form-control"
                                />
                                <span onClick={() => handleQuantityChange(-1)} className="qty-down">
                                    -
                                </span>
                                <span onClick={() => handleQuantityChange(1)} className="qty-up">
                                    +
                                </span>
                            </div>
                        </div>
                        <div>
                            <button onClick={handleAddToCart} className="add-to-cart-btn mt-4">
                                <i className="fa fa-shopping-cart"></i> Thêm vào giỏ hàng
                            </button>
                        </div>
                        <div>
                            <button onClick={handleAddToWishlist} className="add-to-cart-btn mt-4">
                                <i className="fa fa-heart-o"></i> Thêm vào wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detail;
