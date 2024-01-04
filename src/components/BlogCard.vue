<script setup>
</script>

<template>
<div class="col-lg-4 col-md-6 col-12">
    <div class="blog-card">
        <div class="blog-card__thumbnail">
            <img src="https://educhamp.themetrades.com/html/demo/assets/images/blog/latest-blog/pic2.jpg" alt="">
        </div>
        <div class="blog-card__body">
            <ul class="info">
                <li>
                    <a href="#">
                        <i class="bi bi-calendar3"></i>April 14 2019
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="bi bi-person-fill"></i> By John
                    </a>
                </li>
            </ul>
            <a href="#" class="blog-card__body-title">What Will Education Be Like In The Next 50 Years?</a>
            <p>You will see in the guide all my years of valuable experience together with.</p>
            <div class="blog-card__body-footer">
                <a href="#" class="link">Read More</a>
                <a href="#" class="comment">
                    <i class="bi bi-chat-dots"></i>14 Comment
                </a>
            </div>
        </div>
    </div>
</div>
</template>


<style lang="scss" scoped>
    .blog-card {
        box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
        background: #fff;
        &__thumbnail {
            img {
                display: block;
                width: 100%;
            }
        }
        &__body {
            padding: 20px;
            border: 1px solid #EEEEEE;
            .info {
                border-bottom: 1px solid #EEEEEE;
                padding-bottom: 10px;
                margin-bottom: 5px;
                display: flex;
                align-items: center;
                gap: 10px;
                a {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: #4c1864;
                    font-size: 14px;
                    font-weight: 500;
                    text-transform: capitalize;
                }
            }
            &-title {
                display: inline-block;
                font-size: 24px;
                margin-top: 0px;
                margin-bottom: 6px;
                line-height: 34px;
                color: #061538;
                font-weight: 500;
                &:hover {
                    color: #4c1864;
                }
            }
            p {
                margin-bottom: 10px;
                font-size: 16px;
                color: #242424;
                line-height: 28px;
            }
            &-footer {
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-top: 1px solid #EEEEEE;
                padding-top: 20px;
                margin-top: 20px;
                a {
                    color: #000;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-weight: 400;
                }
                .link {
                    text-transform: uppercase;
                    &:hover {
                        text-decoration: underline;
                        color: #4c1864;
                    }
                }
            }
        }
    }
</style>