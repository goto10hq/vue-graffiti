export default {
    getSplitMultiText (text) {
        if (text === null) {
            return ''
        }

        var a = text.split('')
        var result = ''
        for (let i = 0; i < a.length; i++) {
            var c = a[i]
            if (c === '\n') {
                result += '<br />'
            } else {
                result += '<span class=\'l\'>' + c + '</span>'
            }
        }
        return result
    },
    getSplitText (text) {
        if (text === null) {
            return ''
        }

        var a = text.split('')
        var result = ''
        for (let i = 0; i < a.length; i++) {
            var c = a[i]
            if (c === '\n') {
                result += ' '
            } else {
                result += '<span class=\'l\'>' + c + '</span>'
            }
        }
        return result
    }
}