import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:51
 * @route '/user/confirm-password'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/user/confirm-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:51
 * @route '/user/confirm-password'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:51
 * @route '/user/confirm-password'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:51
 * @route '/user/confirm-password'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::store
 * @see vendor/laravel/fortify/src/Http/Controllers/ConfirmablePasswordController.php:51
 * @route '/user/confirm-password'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::custom
 * @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:18
 * @route '/confirm-password'
 */
export const custom = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: custom.url(options),
    method: 'get',
})

custom.definition = {
    methods: ["get","head"],
    url: '/confirm-password',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::custom
 * @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:18
 * @route '/confirm-password'
 */
custom.url = (options?: RouteQueryOptions) => {
    return custom.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::custom
 * @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:18
 * @route '/confirm-password'
 */
custom.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: custom.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::custom
 * @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:18
 * @route '/confirm-password'
 */
custom.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: custom.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::custom
 * @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:18
 * @route '/confirm-password'
 */
    const customForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: custom.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::custom
 * @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:18
 * @route '/confirm-password'
 */
        customForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: custom.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Auth\ConfirmablePasswordController::custom
 * @see app/Http/Controllers/Auth/ConfirmablePasswordController.php:18
 * @route '/confirm-password'
 */
        customForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: custom.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    custom.form = customForm
const confirm = {
    store: Object.assign(store, store),
custom: Object.assign(custom, custom),
}

export default confirm