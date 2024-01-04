<script setup>
</script>

<template>
    <div class="col-lg-3 col-md-6 col-12">
        <div class="course-card">
            <div class="course-card__thumbnail">
                <img src="https://educhamp.themetrades.com/html/demo/assets/images/courses/pic1.jpg">
                <a href="" class="read-more">Read More</a>
            </div>
            <div class="course-card__body">
                <a href="" class="course-card__body-title">Introduction EduChamp – LMS plugin</a>
                <p>Programming</p>
            </div>
            <div class="course-card__footer">
                <div class="review">
                    <p>3 Review</p>
                    <ul class="review-star">
                        <li class="active">
                            <i class="bi bi-star-fill"></i>
                        </li>
                        <li class="active">
                            <i class="bi bi-star-fill"></i>
                        </li>
                        <li class="active">
                            <i class="bi bi-star-fill"></i>
                        </li>
                        <li>
                            <i class="bi bi-star-fill"></i>
                        </li>
                        <li>
                            <i class="bi bi-star-fill"></i>
                        </li>
                    </ul>  
                </div>
                <div class="price">
                    <strike>$190</strike>
                    <p>$120</p>
                </div>
            </div>
        </div> 
    </div>   
</template>

<style lang="scss" scoped>
.course-card {
    box-shadow: 0 0 25px 0 rgba(29,25,0,0.25);
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    transition: all 0.5s;
    &:hover {
        .read-more {
            left: 0;
        }
    }
    &__thumbnail {
        overflow: hidden;
        position: relative;
        img {
            width: 100%;
            height: auto;
        }
        .read-more {
            position: absolute;
            bottom: 0;
            left: -124px;
            padding: 10px 20px;
            display: inline-block;
            font-size: 14px;
            cursor: pointer;
            line-height: 1.42857;
            font-weight: 400;
            text-align: center;
            background-color: #f7b205;
            color: #000;
            transition: all 0.5s;
            &:hover {
                background-color: #4c1864;
                color: #fff;
            }
        }
    }
    &__body {
        padding: 15px;
        text-align: center;
        &-title {
            display: inline-block;
            font-size: 18px;
            line-height: 24px;
            margin-bottom: 10px;
            font-weight: 500;
            color: #111111;
            margin-top: 0;
            transition: all 0.3s;
            &:hover {
                color: #4c1864;
            }
        }
        p {
            font-size: 13px;
        }
    }
    &__footer {
        border-top: 1px solid #e6e6e6;
        display: flex;
        margin: 0;
        .review {
            width: 50%;
            padding: 8px 20px;
            border-right: 1px solid #e6e6e6;
            p {
                font-size: 12px;
                color: #3c3c3c;
            }
            &-star {
                display: flex;
                align-items: center;
                gap: 5px;
                li {
                    font-size: 13px;
                    color: #d1d1d1;
                }
                .active {
                    color: #4c1864;
                }
            } 
        }
        .price {
            width: 50%;
            text-align: right;
            padding: 5px 15px;
            strike {
                font-size: 12px;
                font-weight: 600;
                color: #8e8e8e;
            }
            p {
                font-size: 18px;
                line-height: 24px;
                font-weight: 600;
                color: #111111;
            }
        }
    }
}
</style>