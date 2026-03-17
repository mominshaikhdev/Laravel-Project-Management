import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::custom
 * @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:14
 * @route '/email/verification-notification'
 */
export const custom = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: custom.url(options),
    method: 'post',
})

custom.definition = {
    methods: ["post"],
    url: '/email/verification-notification',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::custom
 * @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:14
 * @route '/email/verification-notification'
 */
custom.url = (options?: RouteQueryOptions) => {
    return custom.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::custom
 * @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:14
 * @route '/email/verification-notification'
 */
custom.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: custom.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::custom
 * @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:14
 * @route '/email/verification-notification'
 */
    const customForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: custom.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Auth\EmailVerificationNotificationController::custom
 * @see app/Http/Controllers/Auth/EmailVerificationNotificationController.php:14
 * @route '/email/verification-notification'
 */
        customForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: custom.url(options),
            method: 'post',
        })
    
    custom.form = customForm
const send = {
    custom: Object.assign(custom, custom),
}

export default send