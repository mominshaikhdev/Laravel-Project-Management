import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
 * @see app/Http/Controllers/Auth/VerifyEmailController.php:15
 * @route '/verify-email/{id}/{hash}'
 */
export const custom = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: custom.url(args, options),
    method: 'get',
})

custom.definition = {
    methods: ["get","head"],
    url: '/verify-email/{id}/{hash}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
 * @see app/Http/Controllers/Auth/VerifyEmailController.php:15
 * @route '/verify-email/{id}/{hash}'
 */
custom.url = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                    hash: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                                hash: args.hash,
                }

    return custom.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{hash}', parsedArgs.hash.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
 * @see app/Http/Controllers/Auth/VerifyEmailController.php:15
 * @route '/verify-email/{id}/{hash}'
 */
custom.get = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: custom.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
 * @see app/Http/Controllers/Auth/VerifyEmailController.php:15
 * @route '/verify-email/{id}/{hash}'
 */
custom.head = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: custom.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
 * @see app/Http/Controllers/Auth/VerifyEmailController.php:15
 * @route '/verify-email/{id}/{hash}'
 */
    const customForm = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: custom.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
 * @see app/Http/Controllers/Auth/VerifyEmailController.php:15
 * @route '/verify-email/{id}/{hash}'
 */
        customForm.get = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: custom.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Auth\VerifyEmailController::__invoke
 * @see app/Http/Controllers/Auth/VerifyEmailController.php:15
 * @route '/verify-email/{id}/{hash}'
 */
        customForm.head = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: custom.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    custom.form = customForm
const verify = {
    custom: Object.assign(custom, custom),
}

export default verify