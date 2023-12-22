import { useState } from 'react';

function Detail({ data }) {
    const [quantity, setQuantity] = useState(1);

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

    const handleAddToCart = () => {
        var cart = localStorage.getItem('cart');

        var product = {
            id: data.id,
            name: data.name,
            price: data.price,
            quantity: quantity,
            slug: data.slug,
            image: data.absolute_path || (data.images && data.images.length > 0 ? data.images[0].absolute_path : null),
            ...(data.is_combo ? { combo_id: data.id } : { book_id: data.id }),
        };

        if (cart === null) {
            cart = [product];
        } else {
            cart = JSON.parse(cart);
            var index = cart.findIndex((item) => item.slug === product.slug);

            if (index !== -1) {
                cart[index].quantity += product.quantity;
            } else {
                cart.push(product);
            }
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Thêm sản phẩm vào giỏ hàng thành công');
    };

    return (
        <>
            <div className="col-md-5 col-md-push-2">
                <div id="product-main-img">
                    <div id="product-main-image" className="product-preview">
                        <img src={data.absolute_path || absolute_path} alt="" />
                    </div>
                </div>
            </div>

            <div className="col-md-2  col-md-pull-5">
                {data.images && data.images.length > 0 && (
                    <div id="product-imgs">
                        <div className="product-preview">
                            {data.images.map((image, index) => {
                                return <img key={index} src={image.absolute_path} alt="" className="mb-4" />;
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

                    <ul className="product-links">
                        <li>Thể loại:</li>
                        <li>
                            <a href="#">Sách tự sự</a>
                        </li>
                    </ul>

                    <ul className="product-links">
                        <li>Tác giả:</li>
                        <li>
                            <a href="#">Dale Carnegie</a>
                        </li>
                    </ul>

                    <div>
                        <h3 className="product-price">
                            {data.price} <del className="product-old-price">$990.00</del>
                        </h3>
                    </div>

                    <div className="add-to-cart">
                        <div className="qty-label d-block mt-4">
                            <span className="mx-4">Số lượng</span>
                            <div className="input-number">
                                <input type="number" value={quantity} />
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
                            <button className="add-to-cart-btn mt-4">
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
