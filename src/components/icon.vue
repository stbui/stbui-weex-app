<<template>
    <text class="stbui-icon" :style="{color:color}" >{{getFontName}}</text>
</template>

<<style scoped>
    .stbui-icon {
        font-family: iconfont;
        font-size:40px;
    }
</style>

<script>
import he from 'he';

export default {
    props: {
        type: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: ''
        }
    },
    created() {
        this.addFontIcon();
    },
    computed: {
        getFontName() {
            return he.decode(this.type)
        }
    }
}
</script>

